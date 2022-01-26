// Import
import React from 'react';
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

// Home Component
const Home = () => {
  // SignInLink style
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  };

  // Navigation or routing
  const history = useHistory();
  // start register function
  function startRegister() {
    history.push('/authenticate');
  }

  return (
    // HomePage
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div>
          <Button
            onClick={startRegister}
            text="Let's go"
            icon="arrow_forward"
          />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
};

// Export
export default Home;
