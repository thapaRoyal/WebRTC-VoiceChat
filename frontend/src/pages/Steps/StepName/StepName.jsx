// Import
import React, { useState } from 'react';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepName.module.css';

// StepName Component
const StepName = ({ onNext }) => {
  const [name, setName] = useState('');
  function nextStep() {
    if (!name) {
      return;
    }
  }
  return (
    <>
      <Card title="What's your full name ?" icon="smile">
        <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        <p className={styles.bottomParagraph}>
          People use real names at codershouse :)
        </p>
        <div className={styles.actionButtonWrap}>
          <Button onClick={nextStep} text="Next" icon="arrow_forward" />
        </div>
      </Card>
    </>
  );
};

//  Export
export default StepName;
