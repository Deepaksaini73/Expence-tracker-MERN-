import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { handleError ,handleSuccess } from '../../Utils';
import './signup.css';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const nevigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const {name,email,password} = signupInfo;
    if(!name || !email || !password){
      return handleError("name,email,password all are field required ")
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(signupInfo)
      });
      const result = await response.json();
      console.log(result)
      const {success , message,error} = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          nevigate('/login')
        },1000)
      }
      else if(error) {
        const details = error?.details[0].message;
        handleError(details)
      }
      else{
        handleError(message)
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form action="#" onSubmit={handleSignup}>
          <h3>Signup</h3>

          <div className="box name-box">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="box email-box">
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="box pass-box">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signup-btn">
            Signup Now
          </button>
        </form>
        <p className="login-info">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
