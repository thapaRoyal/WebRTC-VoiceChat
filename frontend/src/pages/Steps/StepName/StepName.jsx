// Import
import React, { useState } from 'react';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepName.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';

// StepName Component
const StepName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullName, setFullname] = useState(name);
  function nextStep() {
    if (!fullName) {
      return;
    }
    dispatch(setName(fullName));
    onNext();
  }
  return (
    <>
      <Card title="What's your full name ?" icon="smile">
        <TextInput
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
        />
        <p className={styles.paragraph}>
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
