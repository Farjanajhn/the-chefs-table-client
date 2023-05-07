import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext, } from '../Providers/AuthProvider';

const Register = () => {
  const [error,setError]=useState('')
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, photo, password, email)

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate('/')
        
      })
      .catch(error => {
        console.log(error)
        setError(error)
    })
      

  }

  return (
    <div>
            <Container className='w-25 mx-auto'>
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
   
        <Form.Group className="mb-3">
          <Form.Label >Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" required />
        </Form.Group>
   
        <Form.Group className="mb-3">
          <Form.Label >Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label 
          >Password</Form.Label>
           <Form.Control type="password" name="password" placeholder="Enter password" required />

        </Form.Group>
      
        
        <Button type="submit">Register</Button>
        <br></br>
        <Form.Text className="text-success">
            Already have an account?
          <Link to='/login'>Login</Link> 
        </Form.Text>
        <Form.Text className="text-danger">
{error}
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
      
    
    </Form>
    </Container>
    </div>
  );
};

export default Register;