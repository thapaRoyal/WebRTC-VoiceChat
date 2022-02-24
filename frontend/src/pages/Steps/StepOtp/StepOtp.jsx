// Import
import React, { useState } from 'react';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepOtp.module.css';

// StepOtp Component
const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState('');
  async function submit() {
    // onNext()
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" icon="arrow_forward" />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you're agreeing to our Terms of Service and
            privacy policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};

// Export
export default StepOtp;
