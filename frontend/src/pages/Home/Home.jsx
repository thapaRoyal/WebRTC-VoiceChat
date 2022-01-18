import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div>
          <Button text="Get your username" icon="arrow_forward" />
        </div>
        <div>
          <span>Have an invite text?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
