import React, { useState } from 'react';
import { useWebRTC } from '../../hooks/useWebRTC';
import styles from './Room.module.css';

const Room = () => {
  const { clients } = useWebRTC();

  return (
    <div>
      <h1>All connected rooms</h1>
      {clients.map((client) => {
        return (
          <div key={client.id}>
            <audio controls autoPlay></audio>
            <h4>{client.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Room;
