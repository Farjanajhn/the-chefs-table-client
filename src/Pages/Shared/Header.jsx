import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import {  FaUserCircle } from "react-icons/fa";


const Header = () => {
  const { user, logOut } = useContext(AuthContext); 
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand >The-Chefs-Table</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-decoration-none">
              
              <Link className='text-decoration-none text-white me-4 ' to="/">Home</Link>
                <Link className='text-decoration-none text-white' to="/blog ">Blog</Link>
             
         
    
          </Nav>
          <Nav>
          
              {
  user && (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>{user?.displayName}</Tooltip>}
    >
      <Nav.Link href="#deets">
        <FaUserCircle
         style={{ fontSize: '2.5rem', color: 'white' }}>{user?.photoURL}</FaUserCircle>
      </Nav.Link>
    </OverlayTrigger>
  )
}

              
              {
                user ?
                  <Button className='text-decoration-none text-white ms-2' onClick={handleLogOut} >Logout</Button> :
                  <Button
                  ><Link className='text-decoration-none text-white' to="/login">Login</Link></Button> 
                   
              }
           
  
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    </div>
  );
};

export default Header;