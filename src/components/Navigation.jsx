import React from 'react'
import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';

function Navigation() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);


  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Imaze Bazar.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Post</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
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

    <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">React Assignment Project</strong>
            <small>11 second ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, Downlode Your Favorite Image, its FREE!</Toast.Body>
        </Toast>
      </Col>

      
    </div>
  )
}

export default Navigation
