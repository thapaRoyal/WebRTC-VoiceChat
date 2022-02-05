import React, { useState } from 'react';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';

const Phone = () => {
  const { phoneNumber, setPhoneNumber } = useState('');
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" icon="arrow_forward" />
        </div>
      </div>
    </Card>
  );
};

export default Phone;
