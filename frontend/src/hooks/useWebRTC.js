import { useState } from 'react';
import { useStateWithCallback } from './useStateWithCallback';

export const useWebRTC = () => {
  const [clients, setClients] = useStateWithCallback([
    {
      id: 1,
      name: 'Royal T',
    },
    {
      id: 2,
      name: 'Thapa R',
    },
  ]);

  return { clients };
};
