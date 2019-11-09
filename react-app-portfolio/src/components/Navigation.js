import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
    return (
<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Ramsey Gavin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#deets">Projects</Nav.Link>
      <Nav.Link href="#memes">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation;