import React from 'react'
import './login.css'

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <form action="#">
          <h3>Login</h3>

          <div className="box email-box">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="box pass-box">
            <input type="password" className="password" placeholder="Enter your password " />
          </div>
        </form>
        <div className="option-field">
          <span><input type="checkbox" /> Remember me </span>
          <button className="frg-btn">forgot password?</button>
        </div>
        <button className="login-btn"> Login Now</button>
        <p className="sign-info">don't have account ? <button className="sign-btn">sign up</button></p>
      </div>
    </div>
  )
}

export default Login