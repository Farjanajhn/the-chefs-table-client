import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Container } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaThumbsUp } from 'react-icons/fa'
import Recipes from '../../Pages/Recipes';

const Ccards = ({ chefsInfo }) => {
  const {name,img,experience,likes,popular} = chefsInfo;
  return (
 
        
    <div className=''>


      
<Container className='mt-4'>
      <Row>
          <Col className="d-flex"lg={8}>
            <div className='w-25 h-25'>
              <Card.Img variant="top" src={img} /></div>
            <Card className='w-50'>
              <div>
                <Card.Body className='pt-12'>
                <h4>{name}</h4>
                <p><small>Experience:{experience}</small></p>
                  <div className='d-flex'>
                  <FaThumbsUp />
    
                 
                  <p>{likes}</p>
                </div>
                <Link to={`{/chefsInfo/${chefsInfo.id}`}><Button>View Recipe</Button></Link>
  </Card.Body></div>
  
</Card> 
          </Col>
          
 
          <Col lg={4}>
           
          
            <div >
              <img className='w-75 h25 mx-auto img-fluid border ' src={popular} alt="..." />
            </div>
        </Col>
      </Row>
      
    </Container>




    </div>
   

  
  );
};

export default Ccards;