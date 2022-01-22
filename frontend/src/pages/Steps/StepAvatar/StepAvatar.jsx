// Imports
import React from 'react';
import styles from './StepAvatar.module.css';

// StepAvatar component
const StepAvatar = ({ onNext }) => {
  return (
    <>
      <div>StepAvatar</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};
// Export
export default StepAvatar;
