// Import
import React, { useState } from 'react';
import Email from './Email/Email';
import Phone from './Phone/Phone';
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
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button onClick={() => setType('phone')}>Phone</button>
            <button onClick={() => setType('email')}>Email</button>
          </div>

          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

// Export
export default StepPhoneEmail;
