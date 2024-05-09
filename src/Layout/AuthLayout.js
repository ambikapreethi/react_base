import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from '../components/Login.js';
import Signup from '../components/Signup.js';
import Forgotpassword from '../components/Forgotpassword.js';
import "../styles/authlayout.css";


 const AuthLayout = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>        
                <Route path="/" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forgotpassword" element={<Forgotpassword/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default AuthLayout;
