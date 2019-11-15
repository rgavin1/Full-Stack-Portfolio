import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/FullStack.css';
import ScreenShot from '../assets/Web Developer Portfolio.png';
import BootstrapLogo from '../assets/bootstrap-solid.svg';
import ReactLogo from '../assets/reactjs-icon.svg';

const FullStack = () => {
    const technologiesStyle = {
        height: '25px',
        width: '25px'
    }
    return (
        <Container className="d-flex projectContainer">
        <Container className="my-auto">
       <h2 className="text-center" >Full Stack Web Dev Portfolio</h2>
       <div style={{
               backgroundImage: `url(${ScreenShot})`,
               height: '280px',
               margin: '0px auto',
               width: 'inherit',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center'
       }}></div>
       <hr className="mt-4"/>
       <Container className="d-flex justify-content-around">
       <Button title="View" href="" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faEye} /><div className="my-auto ml-2">View</div>
           </Button>
           <Button title="Repository" href="" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faGithub} /><div className="my-auto ml-2">Github</div>
           </Button>
       </Container>
       <hr className="mt-4" />
       <h3>Description</h3>
       <p className="text-justify">This web portfolio is an extension of Ramsey's resume. This site provides a convenient way for potential employers' to view projects and inspect code while also allowing Ramsey to expand his skills.
       </p>
       </Container>
       <Container className="my-auto pt-3">
       <Container className="justify-content-between">
       <div>
       <h5>Issues</h5>
       <ul>
       <li>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
           </li>
           <li>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
           </li>
           <li>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
           </li>
       </ul>
       </div>
       <div>
       <h5>Solutions</h5>
       <ul>
           <li>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
           </li>
           <li>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
           </li>
           <li>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
           </li>
       </ul>
       </div>
       </Container>
       <hr className="mt-4" />
       <h5 className="text-center mb-3">Technologies</h5>
       <div className="d-flex justify-content-around">
        <img style={technologiesStyle} src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML5_Badge" title="HTML5" />
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3  logo" title="CSS3" />  
        <img style={technologiesStyle} src={BootstrapLogo} alt="Bootstrap B Solid Logo" title="Bootstrap" />
        <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
       </div>
       </Container>
    </Container>
    )
}

export default FullStack;

