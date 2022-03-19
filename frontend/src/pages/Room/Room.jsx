import React, { useState } from 'react';
import { useWebRTC } from '../../hooks/useWebRTC';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Room.module.css';

const Room = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { clients, provideRef } = useWebRTC(roomId, user);
  const history = useHistory();

  const handleManualLeave = () => {
    history.push('/rooms');
  };

  return (
    <div>
      <div className="container">
        <button onClick={handleManualLeave} className={styles.goBack}>
          <img src="/images/arrow-left.png" alt="arrow left" />
          <span>All voice rooms</span>
        </button>
      </div>
      <h1>All connected rooms</h1>
      {clients.map((client) => {
        return (
          <div className={styles.userHead} key={client.id}>
            <audio
              ref={(instance) => provideRef(instance, client.id)}
              autoPlay
            ></audio>
            <img
              className={styles.userAvatar}
              src={client.avatar}
              alt="avatar"
            />
            <h4>{client.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Room;
