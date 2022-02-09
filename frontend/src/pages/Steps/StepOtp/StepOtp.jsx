// Import
import React, { useState } from 'react';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepOtp.module.css';

// StepOtp Component
const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState('');
  function next() {}
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock">
          <TextInput value={otp} onChange={(e) => StepOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={next} text="Next" icon="arrow_forward" />
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
