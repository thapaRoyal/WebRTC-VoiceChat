// Imports
import React from 'react';
import styles from './StepAvatar.module.css';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';

// StepAvatar component
const StepAvatar = ({ onNext }) => {
  function submit() {
    //
  }

  return (
    <>
      <Card title="Okay, Logan T!" icon="monkey">
        <p>How,s this photo?</p>
        <div>
          <Button onClick={submit} text="Next" icon="arrow_forward" />
        </div>
      </Card>
    </>
  );
};
// Export
export default StepAvatar;
