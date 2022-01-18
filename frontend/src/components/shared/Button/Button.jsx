import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src={`/images/${icon}.png`} alt="arrow" />
    </button>
  );
};

export default Button;
