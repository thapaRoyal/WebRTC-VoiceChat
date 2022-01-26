// Import
import React, { useState } from 'react';
import styles from './StepPhoneEmail.module.css';

const PhonEmailMap = {
  phone: Phone,
  email: Email,
};

// StepPhoneEmail Component
const StepPhoneEmail = ({ onNext }) => {
  // local state
  const [type, setType] = useState('phone');

  // storing steps in a variable
  const Component = PhonEmailMap[type];

  // onNext function
  function onNext() {
    setType(type + 1);
  }
  return <Component onNext={onNext} />;
};

// Export
export default StepPhoneEmail;
