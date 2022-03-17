import React, { useState } from 'react';
import styles from './Room.module.css';

const Room = () => {
  const [clients, setClient] = useState([
    {
      id: 1,
      name: 'Royal T',
    },
    {
      id: 2,
      name: 'Thapa R',
    },
  ]);
  return (
    <div>
      <h1>All connected rooms</h1>
      {clients.map((client) => {
        return (
          <div>
            <audio controls autoPlay></audio>
            <h4>{client.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Room;
