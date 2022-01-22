// Import
import React from 'react';
import styles from './StepUsername.module.css';

// StepUsername Component
const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>StepUsername</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

// Export
export default StepUsername;
