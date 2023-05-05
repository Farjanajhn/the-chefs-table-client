import React, { useEffect, useState } from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';
import Ccards from '../chef-cards/Ccards';
import FindUs from '../FindUs';


const Home = () => {
  const [chefsInfos, setChefsInfos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/chefsInfos')
      .then(res => res.json())
      .then(data => setChefsInfos(data))
    .catch(error=>console.error(error))
  },[])
  return (
   <Container className='mt-4'>
 
      
      <Card className="bg-dark text-white">
      <Card.Img src="https://as2.ftcdn.net/v2/jpg/03/47/83/55/1000_F_347835560_LgrrNmUnKa2DaiYcHHNwCK0IBqgyqMU2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    
      <Container>
        <h3 className='text-center mt-4'>World reknowned Chefs of India</h3>
        {
          chefsInfos.map(chefsInfo => <Ccards
            key={chefsInfo.id} chefsInfo={chefsInfo}>
          

          </Ccards>)
      }
     
      </Container>

      <Container>
      <FindUs></FindUs>
      </Container>
    
</Container>
    
  );
};

export default Home;