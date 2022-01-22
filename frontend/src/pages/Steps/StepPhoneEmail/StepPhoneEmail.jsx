// Import
import React from 'react';
import styles from './StepPhoneEmail.module.css';

// StepPhoneEmail Component
const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <div>Phone or Email Component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

// Export
export default StepPhoneEmail;
