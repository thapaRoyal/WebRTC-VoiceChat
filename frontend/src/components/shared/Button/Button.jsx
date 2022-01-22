// Import
import React from 'react';
import styles from './Button.module.css';

// Button Component
const Button = ({ text, icon, onClick }) => {
  return (
    // button
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src={`/images/${icon}.png`} alt="arrow" />
    </button>
  );
};

// Export
export default Button;
