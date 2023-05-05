import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { FaPinterest,FaFacebookSquare,FaLinkedin,FaTwitterSquare,FaInstagram } from 'react-icons/fa'

const FindUs = () => {
  return (
   
    <Container className=''>
         <div className='d-flex mt-4'>
      <div className='w-50'>
      <ListGroup className="">
      <ListGroup.Item><FaFacebookSquare/>Facebook</ListGroup.Item>
      <ListGroup.Item><FaPinterest/>Pinterest</ListGroup.Item>
      <ListGroup.Item><FaLinkedin/>Linkedin</ListGroup.Item>
      <ListGroup.Item><FaTwitterSquare/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
        </ListGroup>
        
      </div>
      <div className='w-50'>
        <img className="h-50 ms-4"src="https://www.shutterstock.com/image-vector/3d-social-media-platform-online-600w-2025572012.jpg"alt="" />
      </div>
</div>
 </Container>
  );
};

export default FindUs;