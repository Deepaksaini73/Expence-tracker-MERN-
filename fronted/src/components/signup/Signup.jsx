import React from 'react'
import './signup.css'

function signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <form action="#">
          <h3>signup</h3>

          <div className="box name-box">
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="box email-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="box pass-box">
            <input type="password" className="password" placeholder="Enter your password " />
          </div>
        </form>
        <button className="signup-btn"> signup Now</button>
        <p className="login-info">already have account ? <button className="login-btn">login</button></p>
      </div>
    </div>
  )
}

export default signup