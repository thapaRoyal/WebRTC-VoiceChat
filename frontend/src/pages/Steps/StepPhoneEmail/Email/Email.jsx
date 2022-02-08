import React, { useState } from 'react';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';

const Email = () => {
  const { email, setEmail } = useState('');

  return (
    <Card title="Enter your email id" icon="email">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <Button text="Next" icon="arrow_forward" />
      </div>
    </Card>
  );
};

export default Email;
