import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Register = () => {
  const [accept, setAccept]=useState(false)
    const {createUser, userProfile}= useContext(AuthContext)
   


    const handleRegister=event=>{
        event.preventDefault()
      const  form= event.target
      const name= form.name.value 
      const photoUrl=form.photoURL.value
      const email= form.email.value
      const password= form.password.value

     
      // console.log(name,photoUrl, email, password);
      createUser(email, password)
      .then(result=>{
        const user=result.user
        console.log(user);
        form.reset()
        handleUpdateProfile(name, photoUrl)
      })
      .catch(e=>console.error(e))


      
    }
    const handleUpdateProfile=(name, photoUrl)=>{
      const profile= {
        displayName:name,
        photoURL:photoUrl
      }
      userProfile(profile)
      .then( ()=>{

      })
      .catch(e=>console.error(e))
    }

    const handleAccept=event=>{
      setAccept(event.target.checked);

    }
    return (
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>

          <Form.Control name='name' type="text" placeholder="name" />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Photo Url</Form.Label>

          <Form.Control name='photoURL' type="text" placeholder=" your photo url" />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        onClick={handleAccept}
        label={<>Accept<Link to={'/terms'}> Terms And Condition</Link></>}/>
      </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept} >
          Login
        </Button>
      </Form>
    );
};

export default Register;