import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';

function Navigation() {
  

  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><b>Imaze Bazar.com</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" hover="">
            <Nav.Link href="/" ><b>Home</b></Nav.Link>
            <Nav.Link href="/"><b>Latest</b></Nav.Link>
            <Nav.Link href="/"><b>Contact</b></Nav.Link>
            <Nav.Link href="/"><b>Explore</b></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Likes</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Post Image
              </NavDropdown.Item>
              <NavDropdown.Item href="/">My Favorites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Your Downloads
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ProgressBar animated now={99} />

    

      
    </div>
  )
}

export default Navigation
