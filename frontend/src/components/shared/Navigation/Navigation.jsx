import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="container">
      <Link to="/">
        <img src="/images/logo.png" alt="coders house logo" />
        <span>CodersHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
