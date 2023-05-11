import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Container } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaThumbsUp } from 'react-icons/fa'
import Recipes from '../../Pages/Recipes';

const Ccards = ({ chefsInfo}) => {
  const {id,name,img,experience,likes} = chefsInfo;
  return (
 

     
        <Col>
          <Card>
        <div className='d-flex position-relative'>
          <div className='w-75 h-75'>
              <Card.Img className='w-50 h-50' variant="top" src={img} />
            </div>
            <div>
                <Card.Body className='mr-4'>
                <h4>{name}</h4>
                <p><small>Experience:{experience}</small></p>
                  <div className='d-flex '>
                  <FaThumbsUp />
    
                 
                    <p>{likes}</p>
                    
                  
                </div>
       
                </Card.Body>
                <Link to={`/recipes/${id}`}><Button className='btn btn-dark position-absolute bottom-0 end-0 ms-12 w-100'>View Recipe</Button></Link></div>
            </div>
           

          </Card>
        </Col>
   
   );
  };


    {/*     <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          <Col className="d-flex">
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
                <Link to={`/recipes/${id}`}><Button>View Recipe</Button></Link>
  </Card.Body></div>
  
</Card> 
          </Col>
           */}
 
         {/*  <Col lg={4}>
           
          
            <div >
              <img className='w-75 h25 mx-auto img-fluid border ' src={popular} alt="..." />
            </div>
        </Col> */}
    {/*   </Row> */}
      
  


export default Ccards;