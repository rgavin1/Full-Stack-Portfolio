import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/RealEstateProject.css';
import BootstrapLogo from '../assets/bootstrap-solid.svg';
import ReactLogo from '../assets/reactjs-icon.svg';
import RealEstateImg from '../assets/RealEstate/realestate_479.png';

const RealEstateProject = () => {
    const technologiesStyle = {
        height: '30px',
        width: '30px',
        margin: '10px'
    }
    return (
        <Container className="d-flex projectContainer mt-3">
            <Container className="my-auto">
           <h2 className="text-center" >Nest</h2>
           <div className="text-center" style={{
               width: 'auto',
               height: '300px',
               overflow: 'hidden'
           }}>
               <Image src={RealEstateImg} fluid />
           </div>
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
           <p className="text-justify">This Real Estate web application allowed me to develop skills, learn new concepts, and study unfamiliar technologies. The Nest web application was created to assist in my learning of the M.E.R.N tech stack. I selected the best real estate applications available (i.e., Zillow, Redfin, and Trulia) and attempted to construct a similar product. The objective of this project was to jump into messy real-world problems and solve for all the unknowns.
           </p>
           </Container>
           <Container className="my-auto pt-3">
           <Container className="justify-content-between">
           <div>
           <h5>Issues</h5>
           <ol>
            <li>
                <p>Unfamiliar with setting up an Express.js server and establishing a connection with MongoDB Atlas using Node.js.
                </p>
            </li>
            <li>
                <p>Storage of high-quality images in MongoDB without occupying an excessive amount of space in the database.
                </p>
            </li>
            <li>
                <p>Understanding the React-Router-Dom with the goal I could link to other documents and components.
                </p>
            </li>
            </ol>
           </div>
           <div>
           <h5>Solutions</h5>
           <ol>
               <li>
                   <p>Read the documentation for setting up an Express server and making a request and receiving a response. 
                   </p>
               </li>
               <li>
                   <p>Solved the storage issues by storing only the file paths of the images in the database.
                   </p>
               </li>
               <li>
                   <p>Read the documentation for NPM React-Router-Dom and viewed tutorials, which tackled the issue.
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
        <img style={technologiesStyle} src={BootstrapLogo} alt="Bootstrap B Solid Logo" title="Bootstrap" />
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" title="JavaScript" />
        <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg" alt="Google Maps Logo" title="Google Maps" />
        <img style={{
            height: '30px',
            width: '50px',
            margin: '10px'
        }} src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node Js Logo" title="Nodejs" />
        <img style={{
            height: '20px',
            width: '80px',
            margin: '10px'
        }} src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" title="MongoDB" />
           </Container>
           </Container>
        </Container>
    )
}

export default RealEstateProject;