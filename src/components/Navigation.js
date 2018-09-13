import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from './../assets/svg/rocknbox-logo.svg';

import Login from './Login';

const Navigation = () => {
  return (
    <nav>
      <div class="logo">
        <img src={logo} />
      </div>

      <Login />

      <ul class="menu">
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
