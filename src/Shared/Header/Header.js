import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
  const {user , logOut}=useContext(AuthContext)
    console.log(user)

    return (
       

 <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand > <Link to={'/'}>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to={'/login'}>Login</Link></Nav.Link>
            <Nav.Link ><Link to={'/register'}>Register</Link></Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link >
            {
              user?.uid ?
              <>
                <span>{user?.displayName}</span>
                <button onClick={logOut}>logout</button>
              </>
            
              :
              <Link to={'/login'}>login</Link>


            }
              
              </Nav.Link>
            <Nav.Link eventKey={2} href="memes">
            
            {
              user?.photoURL ?
              <>
              <Image src={user?.photoURL}
              roundedCircle
              style={{height:'30px'}}>

              </Image>
              </>
              :
              <FaUser></FaUser>
            }
          
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
};

export default Header;