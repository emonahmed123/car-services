import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from '../Shared/Loding/Loding';
import SocailLogin from './SocailLogin/SocailLogin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const emailRef = useRef(' ')
  const passwordRef = useRef(' ')
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
 

  
  if (user) {
    //  navigate('/home')
    navigate(from, { replace: true })
  }
  // if(loading){
  //   return <Loding></Loding>
  // }
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message} </p>

  }
  const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth );
  const handleSubmit = event => {
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value
    console.log(email, password)
    signInWithEmailAndPassword(email, password)
  }
  const NavigateRegister = event => {
    navigate('/register')
  }

  const ResetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('sent email')
    }
    else{
      toast('please enter your email')
    }
  }
  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-primary text-center mt-2'> Login </h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary  w-50 mx-auto d-block" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to  car serviec! <button onClick={NavigateRegister} className='text-primary  btn   '>Please Resgister</button></p>
      <p>Forget Password?<button onClick={ResetPassword} className='text-primary  btn   '>Reset password</button></p>

      <SocailLogin></SocailLogin>
      <ToastContainer>

      </ToastContainer>
    </div>
  );
};
 
export default Login;