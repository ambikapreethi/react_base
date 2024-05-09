import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link,Outlet } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login()
{
   // Use React Hook Form with Yup resolver
   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  // Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Process form data
  };

    return(
        <MainLayout>
        <h1 className="meenakshi">MEENAKSHI INDIA LIMITED</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3>LOGIN</h3>
      <label>Email:</label>
      <input type="email" {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}<br/>
      <label>Password:</label>
      <input type="password" {...register('password')} placeholder="Password" />
      
      {errors.password && <p>{errors.password.message}</p>}<br/>

        <p className="forgot"><Link to="/forgotpassword">Forgot Password?</Link></p>
        <button className="butt" type="submit">LOGIN</button>
      
        </form>
        <Outlet/>
        </MainLayout>
        
    )
}
