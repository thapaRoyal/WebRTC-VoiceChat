import React, { useState } from 'react';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http';

const Phone = ({ onNext }) => {
  const { phoneNumber, setPhoneNumber } = useState('');

  async function submit() {
    // Server request
    const res = await sendOtp();
    console.log(res);

    // onNext();
  }
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" icon="arrow_forward" onClick={submit} />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
