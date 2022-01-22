// Imports
import React from 'react';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepName from '../Steps/StepName/StepName';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepUsername from '../Steps/StepUsername/StepUsername';
import styles from './Register.module.css';

// Registration steps
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

// Register Component
const Register = () => {
  return <div>This is register page</div>;
};

// Export
export default Register;
