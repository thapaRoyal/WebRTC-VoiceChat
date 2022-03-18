import { useCallback, useEffect, useRef, useState } from 'react';
import { useStateWithCallback } from './useStateWithCallback';

const users = [
  {
    id: 1,
    name: 'Royal T',
  },
  {
    id: 2,
    name: 'Thapa R',
  },
];

export const useWebRTC = (roomId, user) => {
  const [clients, setClients] = useStateWithCallback(users);

  const audioElements = useRef({});
  const connections = useRef({});
  const localMediaStream = useRef(null);

  const provideRef = (instance, userId) => {
    audioElements.current[userId] = instance;
  };

  const addNewClients = useCallback(
    (newClient, cb) => {},
    [clients, setClients]
  );

  // Capture media

  useEffect(() => {
    const startCapture = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    };
    startCapture().then(() => {});
  }, []);

  return { clients, provideRef };
};
