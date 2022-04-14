import React, { useState } from 'react';
import './Regester.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocailLogin from '../SocailLogin/SocailLogin';
import { async } from '@firebase/util';
import Loding from '../../Shared/Loding/Loding';

const Regester = () => {
   
   const [agree,setAgree] =useState(false)
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
  
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate =useNavigate()
   const NavigateLogin= ()=>{
       navigate('/login')
   }
   if(loading || updating){
    return <Loding></Loding>
  }

    // if(user){
    //     navigate('/home')
    // }

   const handleRegister =  async  event =>{
       event.preventDefault()
       const name =event.target.name.value;
       const email =event.target.email.value
       const password =event.target.password.value
       console.log(event.target.email)
 
  await  createUserWithEmailAndPassword(email,password)
     
  await updateProfile({ displayName:name, });
  navigate('/home') 
   }
    return (
  
     
            <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                  <input onClick={()=>setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                      <label className={agree ?  " ps-2 text-primary":" ps-2 text-danger"} htmlFor="">Accept Terms and conditons</label>
                <input   disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={NavigateLogin}>Please Login</Link> </p>
      <SocailLogin></SocailLogin>
        </div>

    );
};

export default Regester;