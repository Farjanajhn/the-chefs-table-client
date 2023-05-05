import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
 const { user ,logOut} = useContext(AuthContext); 
  return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand >The-Chefs-Table</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              
                <Link to="/">Home</Link>
             
            <Nav.Link href="#pricing">Blog</Nav.Link>
            
          </Nav>
          <Nav>
              {
                user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem' }} /></Nav.Link>  
              }
              
              {
                user ?
                  <Button onClick={handleLogOut} variant="dark">Logout</Button> :
                  <Button variant="dark"><Link to="/login">Login</Link></Button> 
                   
              }
              
       
          
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    </div>
  );
};

export default Header;