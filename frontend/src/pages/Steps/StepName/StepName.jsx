// Import
import React from 'react';
import styles from './StepName.module.css';

// StepName Component
const StepName = ({ onNext }) => {
  return (
    <>
      <div>StepName</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

//  Export
export default StepName;
