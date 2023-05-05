import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub,FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { getAuth,GoogleAuthProvider,  signInWithPopup,GithubAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user); })
      .catch(error => {
      console.log('error',error.massage)
    })
  }
  const handleSignInWthGitHub = () => {
    
    signInWithPopup(auth, gitProvider)
    .then(result => {
      const user = result.user;
      console.log(user); })
    .catch(error => {
    console.log('error',error.massage)
  })
  }
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
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
    <div>
          <Container className='w-50 mx-auto my-4 border border-black px-4 py-4'>
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
      
        
        <Button type="submit">Login</Button>
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
        <Button onClick={handleGoogleSignIn} variant="outline-secondary"><FaGoogle></FaGoogle>Login With google</Button>
        <Button onClick={handleSignInWthGitHub} variant="outline-success"><FaGithub/>Login With github</Button>
    </Container>
    </div>
  );
};

export default Login;