import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Button } from 'react-bootstrap';
import ScreenShot from '../assets/Capstone1339x615.png';

const KentState = () => {
    const technologiesStyle = {
        height: '30px',
        width: '30px',
        margin: '10px'
    }
    return (
        <Container className="d-flex projectContainer mt-3">
            <Container className="my-auto">
           <h2 className="text-center" >Kent State University Parking Meter Application (Capstone Project)</h2>
           <div className="shadow" style={{
               backgroundImage: `url(${ScreenShot})`,
               height: '243px',
               margin: '0px auto',
               maxWidth: '359px',
               minWidth: 'auto',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center'
           }}></div>
           <hr className="mt-4"/>
           <Container className="d-flex justify-content-around">
           <Button title="View" href="" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faExternalLinkAlt} /><div className="my-auto ml-2">View</div>
           </Button>
           <Button title="Repository" href="" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faGithub} /><div className="my-auto ml-2">Github</div>
           </Button>
           </Container>
           <hr className="mt-4" />
           <h3>Description</h3>
           <p className="text-justify">Served as a Front-End developer in this capstone project to solve the Kent State University parking meter problem. KSU Commuter students found it difficult locating available parking meters on campus. Our team elected to develop a responsive website that utilizes technologies like HTML, CSS, JavaScript, JSON, PHP, and Google Maps API.
           </p>
           </Container>
           <Container className="my-auto pt-3">
           <Container className="justify-content-between">
           <div>
           <h5>Issues</h5>
           <ol>
              <li>
                <p>One significant issue, backend engineers, neglected to establish a to the front-end during project presentation. 
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
           </ol>
           </div>
           <div>
           <h5>Solutions</h5>
           <ol>
               <li>
                   <p>Issue never solved</p>
               </li>
               <li>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </p>
               </li>
               <li>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </p>
               </li>
           </ol>
           </div>
           </Container>
           <hr className="mt-4" />
           <h5 className="text-center mb-3">Technologies</h5>
           <Container fluid className="d-flex justify-content-around flex-wrap">
           <img style={technologiesStyle} src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML5_Badge" title="HTML5" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3  logo" title="CSS3" />  
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" title="JavaScript" />  
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/4/48/GoogleMaps_logo.svg" alt="Google Maps Logo" title="Google Maps" />
           <img style={technologiesStyle} src="https://www.php.net/images/logos/php-logo.svg" alt="PHP logo" title="PHP" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" alt="JSON Logo" title="JSON" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Web Serivers Logo" title="Amazon Web Services" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg" alt="MySQL Logo" title="MySQL" />
           </Container>
           </Container>
        </Container>
    )
}

export default KentState;