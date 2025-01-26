import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../Utils';
import { ToastContainer } from 'react-toastify';
import './login.css';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const nevigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      handleError('Email and password are required.');
      return;
    }

    try {
      const url = 'http://localhost:8080/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      console.log(result)
      if (!response.ok) {
        return handleError(result.message || 'Failed to log in');
      }
      const { success, message, jwtToken, error, name } = result;
      console.log(result);
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('logedInUser', name);

        setTimeout(() => {
          nevigate('/home')
        }, 1000)
      }
      else if (error) {
        const details = error?.details[0].message;
        handleError(details)
      }
      else {
        handleError(message)
      }

    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h3>Login</h3>


          <div className="box email-box">
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
            />
          </div>
          <div className="box pass-box">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
            />
          </div>

          <div className="option-field">
            <span>
              <input type="checkbox" /> Remember me
            </span>
            <button type="button" className="frg-btn">Forgot password?</button>
          </div>

          <button type="submit" className="login-btn">
            Login Now
          </button>
        </form>
        <p className="sign-info">
          Don't have an account?{' '}
          <Link to="/signup" className="sign-btn">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
