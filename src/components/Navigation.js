import React from 'react';
import './Navigation.css';
import logo from './../assets/svg/rocknbox-logo.svg';

import Login from './Login';

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="rocknbox logo" />
      </div>

      <Login />

      <ul className="menu">
        <li>
          <a href="#products">products</a>
        </li>
        <li>
          <a href="#FAQ">FAQ</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
