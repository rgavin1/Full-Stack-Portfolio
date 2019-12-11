import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/RestaurantProj.css';
import BootstrapLogo from '../assets/bootstrap-solid.svg';
import ReactLogo from '../assets/reactjs-icon.svg';
import RestaurantImg from '../assets/Resturant/Barroco_New_479.png';
import { Image } from 'react-bootstrap';

const RestaurantProj = () => {
    const technologiesStyle = {
        height: '25px',
        width: '25px'
    }
    return (
        <Container className="d-flex projectContainer mt-3">
            <Container className="my-auto">
           <h2 className="text-center" >Barroco</h2>
           <div className=" mx-auto" style={{
               width: 'auto',
               height: '300px',
               overflow: 'hidden'
           }} >
            <Image src={RestaurantImg} fluid/>
           </div>
           <hr className="mt-4"/>
           <Container className="d-flex justify-content-around">
           <Button title="View" target="_blank" href="https://barroco.netlify.com/
" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faEye} /><div className="my-auto ml-2">View</div>
           </Button>
           <Button title="Repository" target="_blank" href="https://github.com/rgavin1/Barroco-Bar" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faGithub} /><div className="my-auto ml-2">Github</div>
           </Button>
           </Container>
           <hr className="mt-4" />
           <h3>Description</h3>
           <p className="text-justify">Faux Website** Recreated a class assignment originally built using HTML and CSS3, now converted to Reactjs and Bootstrap4
           </p>
           </Container>
           <Container className="my-auto pt-3">
           <Container className="justify-content-between">
           <div>
           <h5>Issues</h5>
           <ol>
               <li>
                   <p>I was extremely new to website building and responsive web design.</p>
               </li>
               <li>
                   <p>I have struggled with media queries.</p>
               </li>
               <li>
                   <p>I had issues getting the video to play in the background.
                   </p>
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
                   <p>With assistance from my professor and many tutorials, I managed to solve the issue.
                   </p>
               </li>
               <li>
                   <p>I found documentation for a video background on the React site and found I needed to camel case an attribute, which solved the problem.
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
           <img style={technologiesStyle} src={BootstrapLogo} alt="Bootstrap B Solid Logo" title="Bootstrap" />
           <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" title="JavaScript" />
           <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
           <img style={{
            height: '20px',
            width: '70px'
           }} src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" alt="Netlify Logo" title="Netlify" />
           </Container>
           </Container>
        </Container>
    )
}

export default RestaurantProj;