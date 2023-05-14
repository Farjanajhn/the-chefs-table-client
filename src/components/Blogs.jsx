import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
  return (
    <Container className='mt-4'>
    <h1 className='text-2xl font-bold'>1. Tell us the differences between uncontrolled and controlled components.</h1>
      
     <p>
        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
    
      <h1 className='text-2xl font-bold'>2. How to validate React props using PropTypes?</h1>
      

      <p>React PropTypes validators
any : The prop can be of any data type.
bool : The prop should be a Boolean.
number : The prop should be a number.
string : The prop should be a string.
func : The prop should be a function.
array : The prop should be an array.
        object : The prop should be an object.</p>
      

    
      <h1 className='text-2xl font-bold'>  
        3. Tell us the difference between nodejs and express js?</h1>
      
      <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
    
      
      <h1 className='text-2xl font-bold'>  
       
        4. What is a custom hook, and why will you create a custom hook?</h1>
      
      <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>

    </Container>
  );
};

export default Blogs;