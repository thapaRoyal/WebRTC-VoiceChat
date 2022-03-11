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
  const { isAuth, user } = useSelector((state) => state.auth);

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
      <div className={styles.navRight}>
        <h3>{user.name}</h3>
        <Link to="/">
          <img src={user.avatar} width="40" height="40" alt="Avatar" />
        </Link>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </nav>
  );
};

// Export
export default Navigation;
