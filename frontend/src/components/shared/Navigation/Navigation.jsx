// Import
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

// Navigation Component
const Navigation = () => {
  // brandStyle
  const brandStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  };

  // logoText Style
  const logoText = {
    marginLeft: '10px',
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="coders house logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

// Export
export default Navigation;
