// Login.js
import React, { useState } from 'react';
import { loginUser } from './auth';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      // Validate login
      const loginSuccessful = await loginUser(loginData.username, loginData.password);

      if (loginSuccessful) {
        // Trigger the login action in the parent component
        onLogin();
      } else {
        alert('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" name="username" value={loginData.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
      </label>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
