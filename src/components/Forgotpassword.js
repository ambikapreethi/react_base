import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required')
   
  });
 
export default function Forgotpassword()
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
            <h2>Forgot Password</h2>
            <p className="paragraph">Enter your registered email and get reset password link option</p>
            <label>Email:</label>
      <input type="email" {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}<br/>
          
        <button className="cont" type="submit">Continue</button>
        <p className="continue">Do you have account? <Link to="../login">Continue</Link></p>

    </form>
    
    </MainLayout>
    )
}