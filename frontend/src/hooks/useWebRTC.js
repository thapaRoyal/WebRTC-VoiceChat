import { useCallback, useEffect, useRef, useState } from 'react';
import { useStateWithCallback } from './useStateWithCallback';
import { socketInit } from '../socket';
import { ACTIONS } from '../actions';
import freeice from 'freeice';

export const useWebRTC = (roomId, user) => {
  const [clients, setClients] = useStateWithCallback([]);

  const audioElements = useRef({});
  const connections = useRef({});
  const localMediaStream = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = socketInit();
  }, []);

  const addNewClient = useCallback(
    (newClient, cb) => {
      const lookingFor = clients.find((client) => client.id === newClient.id);
      if (lookingFor === undefined) {
        setClients((existingClients) => [...existingClients, newClient], cb);
      }
    },
    [clients, setClients]
  );

  // Capture media

  useEffect(() => {
    const startCapture = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    };
    startCapture().then(() => {
      addNewClient(user, () => {
        const localElement = audioElements.current[user.id];
        if (localElement) {
          localElement.volume = 0;
          localElement.srcObject = localMediaStream.current;
        }

        // socket emit JOIN socket io
        socket.current.emit(ACTIONS.JOIN, { roomId, user });
      });
    });
  }, []);

  useEffect(() => {
    const handleNewPeer = async ({ peerId, createOffer, user: remoteUser }) => {
      // if already connected then give warning
      if (peerId in connections.current) {
        return console.warn(
          `You are already connected with ${peerId} (${user.name})`
        );
      }
      connections.current[peerId] = new RTCPeerConnection({
        iceServers: freeice(),
      });
      // handle new ice candidate
      connections.current[peerId].onicecandidate = (event) => {
        socket.current.emit(ACTIONS.RELAY_ICE, {
          peerId,
          icecandidate: event.candidate,
        });
      };

      // Handle on track on this connection
      connections.current[peerId].ontrack = ({ streams: [remoteStream] }) => {
        addNewClient(remoteUser, () => {
          if (audioElements.current[remoteUser.id]) {
            audioElements.current[remoteUser.id].srcObject = remoteStream;
          } else {
            let settled = false;
            const interval = setInterval(() => {
              if (audioElements.current[remoteUser.id]) {
                audioElements.current[remoteUser.id].srcObject = remoteStream;
                settled = true;
              }
              if (settled) {
                clearInterval(interval);
              }
            }, 1000);
          }
        });
      };

      // Add local track to remote connections
      localMediaStream.current.getTracks().forEach((track) => {
        connections.current[peerId].addTrack(track, localMediaStream.current);
      });

      // Create offer
      if (createOffer) {
        const offer = await connections.current[peerId].createOffer();
      }
    };
    socket.current.on(ACTIONS.ADD_PEER, handleNewPeer);
  }, []);

  const provideRef = (instance, userId) => {
    audioElements.current[userId] = instance;
  };

  return { clients, provideRef };
};
