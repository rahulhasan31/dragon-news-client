import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const{userSignIn}= useContext(AuthContext)
    const navigate= useNavigate()
    const [error, setError]=useState('')
    const location= useLocation()
    const from= location.state?.from?.pathname || '/'

    const handleLogin=event=>{
      event.preventDefault()
    const form= event.target
    const email= form.email.value 
    const password = form.password.value
    console.log(email, password);
    userSignIn(email, password)
    .then(result=>{
        const user=result.user
        console.log(user)
        form.reset()
        setError('')
        navigate(from, {replace: true})
    })
    .catch(e=>{
      const msg= e.message
      setError(msg)

    })
    }

    return (
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  name="email" type="email" placeholder="Enter email" />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
       <p className='text-danger'>{error}</p>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
};

export default Login;