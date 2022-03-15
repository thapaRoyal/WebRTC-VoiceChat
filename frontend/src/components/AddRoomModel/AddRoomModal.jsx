import React from 'react';
import styles from './AddRoomModal.module.css';
import TextInput from '../shared/TextInput/TextInput';

const AddRoomModel = () => {
  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <div className={styles.modalHeader}>
          <h3>Enter the topic to be discussed</h3>
          <TextInput fullwidth="true" />
          <h2>Room types</h2>
          <div className={styles.roomTypes}>
            <div className={styles.typeBox}>
              <img src="/images/globe.png" alt="globe" />
              <span>Open</span>
            </div>
            <div className={styles.typeBox}>
              <img src="/images/social.png" alt="social" />
              <span>Social</span>
            </div>
            <div className={styles.typeBox}>
              <img src="/images/lock.png" alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}></div>
      </div>
    </div>
  );
};

export default AddRoomModel;
