import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

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
          <Nav className="mx-auto">
              
                <Link to="/">Home</Link>
             
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
            
          </Nav>
          <Nav>
              {
                user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem',color: 'white' }} /></Nav.Link>  
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