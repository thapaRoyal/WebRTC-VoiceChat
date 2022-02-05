import React, { useState } from 'react';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';

const Phone = () => {
  const { phoneNumber, setPhoneNumber } = useState('');
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <Button text="Next" icon="arrow_forward" />
      </div>
    </Card>
  );
};

export default Phone;
