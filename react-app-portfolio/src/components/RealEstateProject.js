import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/RealEstateProject.css';
import Pic from '../assets/realestatewebpage1339x935.png';
import BootstrapLogo from '../assets/bootstrap-solid.svg';
import ReactLogo from '../assets/reactjs-icon.svg';

const RealEstateProject = () => {
    const technologiesStyle = {
        height: '25px',
        width: '25px'
    }
    return (
        <Container className="d-flex projectContainer">
            <Container className="my-auto">
           <h2 className="text-center" >Nest</h2>
           <div style={{
               backgroundImage: `url(${Pic})`,
               height: '240px',
               margin: '0px auto',
               width: '359px',
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
           <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Amet mauris commodo quis imperdiet massa tincidunt. Gravida rutrum quisque non tellus orci. Fusce ut placerat orci nulla. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.
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
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" title="JavaScript" />
        <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/4/48/GoogleMaps_logo.svg" alt="Google Maps Logo" title="Google Maps" />
           </div>
           </Container>
        </Container>
    )
}

export default RealEstateProject;