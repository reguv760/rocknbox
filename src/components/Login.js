import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div>
      <ul className="login">
        <li>
          <label className="color">Username:</label>
          <input type="text" />
        </li>
        <li>
          <label className="color">Password:</label>
          <input type="Password" />
        </li>
      </ul>
    </div>
  );
};
export default Login;
