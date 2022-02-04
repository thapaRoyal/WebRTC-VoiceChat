import React from 'react';
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';

const Email = () => {
  return (
    <Card title="Enter your email id" icon="email">
      <div>
        <Button text="Next" icon="arrow_forward" />
      </div>
    </Card>
  );
};

export default Email;
