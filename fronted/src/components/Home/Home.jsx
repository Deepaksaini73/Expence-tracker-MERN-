import React, { useEffect, useState } from 'react'
import { handleSuccess } from '../../Utils';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Inbox from '../GroupInbox/Inbox';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loginUser,setLoginUser] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
        setLoginUser(localStorage.getItem("logedInUser"));
  },[])

  const logout=()=>{
    localStorage.removeItem("logedInUser");
    localStorage.removeItem("token");
    handleSuccess("user log out succefully")
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }
  
  return (
    <>
      <Navbar logout={logout}/>
      <Inbox/>
      <ToastContainer/>
    </>
  )
}

export default Home