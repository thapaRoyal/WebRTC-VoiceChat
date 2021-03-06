// Import
import React from 'react';
import styles from './Card.module.css';

// Card Component
const Card = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        {icon && <img src={`/images/${icon}.png`} alt="logo" />}
        {title && <h1 className={styles.heading}>{title}</h1>}
      </div>
      {children}
    </div>
  );
};

// Export
export default Card;
