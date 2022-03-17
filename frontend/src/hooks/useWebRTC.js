import { useRef, useState } from 'react';
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

e
xport const useWebRTC = (roomId, user) => {
  const [clients, setClients] = useStateWithCallback(users);

  const audioElements = useRef({});
  const connections = useRef({});
  const localMediaStream = useRef(null);

  const provideRef = (instance, userId) => {
    audioElements.current[userId] = instance;
  };

  return { clients, provideRef };
};
