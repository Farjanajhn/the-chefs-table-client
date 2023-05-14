import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext, } from '../Providers/AuthProvider';

const Register = () => {
  const [error, setError] = useState('')

 
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
  if (!email || !password) {
      setError('A USER CAN NOT SUBMIT AN EMPTY EMAIL AND PASSWORD FIELDS');
      return;
    }
   else if (password.length < 6) {
      setError('password should be more than 6 character')
      return;
    }

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setError('');
        event.target.reset();

    /*     updateUserData(result.user.name) */
        navigate('/')
       
        
      })
      .catch(error => {
      
        const errorMessage = error.message
        const errorCode = error.code;

       console.error(errorCode); 
        setError(errorMessage )
    })
  }
/*   const updateUserData = (user,name) => {
    updateProfile(user, {
      displayName: name
    }).then(() => {
     console.log('user name updated')
    }).catch((error) => {
     setError(error.massage)
    });
  }


 */

  return (
      <Container className=' mx-auto'> 
    <div className='d-flex gap-4 mt-4'>
        <div className='w-50'>
          
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
   
        <Form.Group className="mb-3">
          <Form.Label >Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name"  />
        </Form.Group>
   
        <Form.Group className="mb-3">
          <Form.Label >Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo url"  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label 
          >Password</Form.Label>
           <Form.Control type="password" name="password" placeholder="Enter password"  />

        </Form.Group>
      
        
        <Button type="submit">Register</Button>
        <br></br>
        <Form.Text className="text-success">
            Already have an account?
          <Link to='/login'>Login</Link> 
        </Form.Text>
 
        <Form.Text className="text-danger">
        <p>{error}</p>
        </Form.Text>
      
      
      
    
    </Form>
  
      </div>
      <div className="w-50">
        <img  src="https://www.eventact.com/images/registration/registration.svg" alt="" />
      </div>
      </div>
        </Container> 
  );
};

export default Register;