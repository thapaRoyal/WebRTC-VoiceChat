// Import
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../http';
import { setAuth } from '../../../store/authSlice';
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

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  async function logoutUser() {
    // logic
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="coders house logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
      {isAuth && <button onClick={logoutUser}>Logout</button>}
    </nav>
  );
};

// Export
export default Navigation;
