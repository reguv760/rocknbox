import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div>
      <ul class="login">
        <li>
          <label class="color">Username:</label>
          <input type="text" />
        </li>
        <li>
          <label class="color">Password:</label>
          <input type="Password" />
        </li>
      </ul>
    </div>
  );
};
export default Login;
