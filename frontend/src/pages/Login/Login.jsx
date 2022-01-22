// Import
import React, { useState } from 'react';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';

// Login steps
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

//Login Component
const Login = () => {
  // local state
  const [step, setStep] = useState(1);

  // storing steps in a variable
  const Step = steps[step];

  // onNext function
  function onNext() {
    setStep(step + 1);
  }
  return <Step onNext={onNext} />;
};

// Export
export default Login;
