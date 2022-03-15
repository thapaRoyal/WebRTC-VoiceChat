import React from 'react';
import styles from './AddRoomModal.module.css';
import TextInput from '../shared/TextInput/TextInput';

const AddRoomModel = () => {
  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <div className={styles.modalHeader}>
          <h3>Enter the topic to be discussed</h3>
          <TextInput />
        </div>
        <div className={styles.modalFooter}></div>
      </div>
    </div>
  );
};

export default AddRoomModel;
