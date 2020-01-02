import React, {useRef, useEffect} from 'react';
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/favicon-32x32.png';
import '../styles/Navigation.css';
import { TweenMax, Power3 } from 'gsap';

const Navigation = () => {
  let navItem = useRef(null);

  useEffect(() => {
    TweenMax.to(
      navItem,
      2,
      {
        transform: 'translate(0%, 0%)',
        ease: Power3.easeIn,
      }
    )
  }, []);
    return (
<Navbar ref={el => {navItem = el }} sticky="top" collapseOnSelect expand="lg" className="navigation-background">
  <Container>
  <Navbar.Brand title="Ramsey Gavin">
    <Link to="/" aria-label="Ramsey Gavin's Logo links to homepage" ><Image src={Logo}  aria-label="The Letter R to represent Ramsey Gavin .com"/></Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link title="About" href="#projects" style={{
    color: 'white'
  }}>About</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <Container className="text-center">
        <NavDropdown.Item title="Real Estate Application" >
          <Link to="/RealEstateProj" >Real Estate Application</Link>
        </NavDropdown.Item>
        <NavDropdown.Item title="Digital Agency Application" >
          <Link to="/DigitalAgency" >Digital Agency Application</Link>
        </NavDropdown.Item>
        <NavDropdown.Item title="Kent State Parking Meter" >
          <Link to="/CapstoneProj">Kent State Parking Meter</Link>
        </NavDropdown.Item>
        <NavDropdown.Item title="Restaurant Project" >
          <Link to="/RestaurantProj">Restaurant Project</Link>
        </NavDropdown.Item>
        <NavDropdown.Item title="Web Development Portfolio" >
          <Link to="/PortfolioProj">Web Development Portfolio</Link>
        </NavDropdown.Item>
        <NavDropdown.Item title="Weather Application" >
          <Link to="/WeatherApp">Weather Application</Link>
        </NavDropdown.Item>
        <NavDropdown.Item title="Monthly Budget Application" className="text-muted">
          <Link to="#">Monthly Budget Application</Link>
        </NavDropdown.Item>
        </Container>
      </NavDropdown>
      <Nav.Link href="#contact" style={{
    color: 'white'
  }}>Contact</Nav.Link>
    </Nav>
    <Nav>
      <NavDropdown.Divider />
      <Container className="d-flex justify-content-around">
      <Nav.Link title="Resume" href="https://docs.google.com/document/d/1C3GWuIw0NWx_ybZs0xqecSB1Rx6zQeBp2pT3a9esG5o/edit?usp=sharing" target="blank" style={{
        fontSize: '1.7em',
        color: 'white'
      }}>
        <FontAwesomeIcon icon={faFile}/>
      </Nav.Link>
      <Nav.Link title="LinkedIn" href="https://www.linkedin.com/in/ramsey-gavin" target="blank" style={{
        fontSize: '1.75em',
        color: 'white'
      }}>
        <FontAwesomeIcon icon={faLinkedin}/>
      </Nav.Link>
      <Nav.Link title="Github" href="https://github.com/rgavin1" target="blank" style={{
        fontSize: '1.75em',
        color: 'white'
      }}>
        <FontAwesomeIcon icon={faGithubSquare}/>
      </Nav.Link>
      </Container>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;