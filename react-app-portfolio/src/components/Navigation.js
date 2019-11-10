import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
    return (
<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Ramsey Gavin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Real Estate Application</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kent State Parking Meter</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Web Development Portfolio</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Monthly Budget Application</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#memes">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="https://www.linkedin.com/in/ramsey-gavin" target="blank" style={{
        fontSize: '1.75em'
      }}>
        <FontAwesomeIcon icon={faLinkedin}/>
      </Nav.Link>
      <Nav.Link href="https://github.com/rgavin1" target="blank" style={{
        fontSize: '1.75em'
      }}>
        <FontAwesomeIcon icon={faGithubSquare}/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation;