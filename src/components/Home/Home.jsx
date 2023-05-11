import React, { useEffect, useState } from 'react';
import { Card, Carousel, Container, Row } from 'react-bootstrap';
import Ccards from '../chef-cards/Ccards';
import FindUs from '../FindUs';
import QuestionAndAnswer from '../QuestionAndAnswer';


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
      <Card.Img className="h-40 w-75 mx-auto" src="https://www.dochipo.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/01/banner-1.png.webp" alt="Card image" />
      <Card.ImgOverlay className='position-relative mt-64 pt-12'>
        <Card.Title className='text-center'> "Discovering the Flavors of India: A Journey Through the Exquisite Cuisine of the Subcontinent"
</Card.Title>
        <Card.Text  className='text-center'>
       
Indian cuisine is a feast for the senses, with its vibrant colors, bold spices, and rich aromas that come together to create a truly unforgettable culinary experience. From the fragrant biryanis and curries of the north to the spicy seafood delicacies of the south, the diverse and flavorful dishes of India reflect the country's rich cultural heritage and centuries-old culinary traditions. Embark on a journey through the exquisite cuisine of the subcontinent and discover the magic of Indian food for yourself.
        </Card.Text>
      
      </Card.ImgOverlay>
    </Card>

    
  
        <h3 className='text-center mt-4'>World reknowned Chefs of India</h3>

        <Container className='ml-12 mt-4 '>
        
        <div className='mx-auto '>
          
          <Row xs={1} md={4} lg={2} className="g-4">
        {
          chefsInfos.map(chefsInfo => <Ccards
            key={chefsInfo.id} chefsInfo={chefsInfo}>
          

          </Ccards>)
            }
            </Row>
              </div>
    </Container>


      <Container>
      <FindUs></FindUs>
      </Container>
      <Container className='mx-auto mt-4 '>
        <QuestionAndAnswer></QuestionAndAnswer>
      </Container>
    
</Container>
    
  );
};

export default Home;