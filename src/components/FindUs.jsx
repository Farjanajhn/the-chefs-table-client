import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FaPinterest,FaFacebookSquare,FaLinkedin,FaTwitterSquare,FaInstagram } from 'react-icons/fa'

const FindUs = () => {
  return (
  
    <Container className='mt-4'>
   <h1 className='text-center my-4'>Find Us on</h1>
   <Row className='gap-2'>
          <Col className='border mt-12'>
        
          <FaFacebookSquare className='w-75 h-75 ' />
          <p className='text-center'>Facebook</p>
   
          </Col>
      
        <Col className='border'>
          <FaPinterest className='w-75 h-75 ' />
          <p className='text-center'>Pinterest</p>
    </Col>
        <Col className='border'><FaLinkedin className='w-75 h-75 color-blue' />
          <p className='text-center'>LinkeDin</p>
        </Col>
        <Col className='border'> <FaInstagram className='w-75 h-75' />
          <p className='text-center'>Instagram</p></Col>
        <Col className='border'><FaTwitterSquare className='w-75 h-75' />
          <p className='text-center'>Twitter</p></Col>

      </Row>
   </Container>
    );
  };
  
    {/* <Container className=''>
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
 </Container> */}
  
 
export default FindUs;