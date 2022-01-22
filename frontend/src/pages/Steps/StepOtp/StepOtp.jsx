// Import
import React from 'react';
import styles from './StepOtp.module.css';

// StepOtp Component
const StepOtp = ({ onNext }) => {
  return (
    <>
      <div>StepOtp</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

// Export
export default StepOtp;
