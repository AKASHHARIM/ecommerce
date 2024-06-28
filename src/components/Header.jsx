import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function header() {
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><img className='' src="" alt="" />E-kart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#link"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default header