import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub,FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
  

  const { signIn,signWithGoogle,signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then(result => {
        const loggeduser = result.user;
        console.log(loggeduser);
        navigate('/');
      })
      .catch(error => {
        console.log('error', error.massage);
    })
  }
  const handleSignInWthGitHub = () => {
    
    signInWithGithub()
    .then(result => {
      const signedUser = result.user;
      console.log(signedUser);
      Form.reset();
    })
    .catch(error => {
    console.log('error',error.massage)
  })
  }
 
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate('/');
      })
      .catch(error => {
      console.error(error)
    }) }
  return (
    <Container className=' mx-auto my-4 border border-black px-4 py-4'>
    <div className='d-flex gap-4 mt-4'>
      <div className='w-50'>
        <img src="https://nordvpn.com/wp-content/uploads/blog-featured-nordvpn-login-and-sign-up-process-explained-1.svg" alt="" />
      </div>
      <div className='w-50'>
          
      <h3 className='text-center'>Please login</h3>
      <Form className='mt-12' onSubmit={handleSignIn}>
   
        <Form.Group className="mb-3">
          <Form.Label >Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label 
          >Password</Form.Label>
           <Form.Control type="password" name="password" placeholder="Enter password" required />

        </Form.Group>
      
        
        <Button className="w-100"type="submit">Login</Button>
        <br></br>
        <Form.Text className="text-success">
            Don't have an account?
            <Link to="/register">register</Link>
         
           

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        </Form>
        <div>
          <Button className="ml-8"onClick={handleGoogleSignIn} variant="outline-secondary"><FaGoogle></FaGoogle>Login With google</Button>
          <br />
        <Button className="ml-4" onClick={handleSignInWthGitHub} variant="outline-success"><FaGithub/>Login With github</Button>
      </div>
   
    </div>
    </div>
     </Container>
  );
};

export default Login;