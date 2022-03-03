// Imports
import React, { useState } from 'react';
import styles from './StepAvatar.module.css';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import { useSelector } from 'react-redux';

// StepAvatar component
const StepAvatar = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const [image, setImage] = useState('/images/monkey-avatar.png');
  function submit() {
    //
  }

  return (
    <>
      <Card title={`Okay, ${name}!`} icon="monkey">
        <p className={styles.subHeading}>How's this photo?</p>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImage} src={image} alt="Avatar" />
        </div>
        <div>
          <input id="avatarInput" type="file" className={styles.avatarInput} />
          <label className={styles.avatarLabel} htmlFor="avatarInput">
            Choose a different photo
          </label>
        </div>
        <div>
          <Button onClick={submit} text="Next" icon="arrow_forward" />
        </div>
      </Card>
    </>
  );
};
// Export
export default StepAvatar;
