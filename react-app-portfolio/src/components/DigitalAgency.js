import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/RestaurantProj.css';
import BootstrapLogo from '../assets/bootstrap-solid.svg';
import ReactLogo from '../assets/reactjs-icon.svg';
import DAImg from '../assets/Digital Agency/digital-agency-orig.png';
import { Image } from 'react-bootstrap';
import SassLogo from '../assets/TechnologiesLogos/Sass_Logo_Color.svg';
import Firebaselogo from '../assets/TechnologiesLogos/Firebase_Logo.svg'
import GreenSocklogo from '../assets/TechnologiesLogos/GreenSock-logo.svg'

const DigitalAgency = () => {
    const technologiesStyle = {
        height: '25px',
        width: '25px'
    }
    return (
        <Container className="d-flex projectContainer mt-3">
            <Container className="my-auto">
           <h2 className="text-center" >PIRTY</h2>
           <div className=" mx-auto" style={{
               width: 'auto',
               height: '300px',
               overflow: 'hidden'
           }} >
            <Image src={DAImg} fluid/>
           </div>
           <hr className="mt-4"/>
           <Container className="d-flex justify-content-around">
           <Button title="View" target="_blank" href="https://digital-agency-pirty.firebaseapp.com/" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faEye} /><div className="my-auto ml-2">View</div>
           </Button>
           <Button title="Repository" target="_blank" href="https://github.com/rgavin1/Digital-Agency" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faGithub} /><div className="my-auto ml-2">Github</div>
           </Button>
           </Container>
           <hr className="mt-4" />
           <h3>Description</h3>
           <p className="text-justify">I thought one day I end up joining a Digital Marketing Agency as a Web developer, so here's my two-day design and develope attempt at creating a Digital Agency website using some new skills, Sass and GreenSock.js to build this website. Enjoy! 
           </p>
           </Container>
           <Container className="my-auto pt-3">
           <Container className="justify-content-between">
           <div>
           <h5>Issues</h5>
           <ol>
               <li>
                   <p>Learning and implement new skills in the Sass syntax.</p>
               </li>
               <li>
                   <p>Figuring out what UI elements I wanted to use for this site.</p>
               </li>
           </ol>
           </div>
           <div>
           <h5>Solutions</h5>
           <ol>
               <li>
                   <p>Practice, Practice, Practice
                   </p>
               </li>
               <li>
                   <p>Search the top 100 Digital Marketing agencies to find out which technologies they applied to their website.
                   </p>
               </li>
           </ol>
           </div>
           </Container>
           <hr className="mt-4" />
           <h5 className="text-center mb-3">Technologies</h5>
           <Container className="d-flex justify-content-around flex-wrap">
           <img style={technologiesStyle} src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML5_Badge" title="HTML5" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3  logo" title="CSS3" />  
           <img style={technologiesStyle} src={SassLogo} alt="Sassy Logo" title="Sass" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" title="JavaScript" />
           <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
           <img style={{
            height: '20px',
            width: '80px'
           }} src={Firebaselogo} alt="Firebase Logo" title="Firebase" />
           <img style={technologiesStyle} src={GreenSocklogo} alt="Firebase Logo" title="Firebase" />
           </Container>
           </Container>
        </Container>
    )
}

export default DigitalAgency;