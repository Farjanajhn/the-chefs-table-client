import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from '../../components/ActiveLink/ActiveLink';

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
              
              <Link className='text-decoration-none text-white margin-right-4 ' to="/">Home</Link>
                <Link className='text-decoration-none text-white' to="/blog ">Blog</Link>
             
         
    
          </Nav>
          <Nav>
              {
                user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem',color: 'white' }} /></Nav.Link>  
              }
              
              {
                user ?
                  <Button className='text-decoration-none text-white' onClick={handleLogOut} >Logout</Button> :
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