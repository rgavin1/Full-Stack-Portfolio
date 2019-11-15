import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Button } from 'react-bootstrap';
import ScreenShot from '../assets/Capstone1339x615.png';

const KentState = () => {
    return (
        <Container className="d-flex projectContainer">
            <Container className="my-auto">
           <h2 className="text-center" >Kent State Capstone Project</h2>
           <div style={{
               backgroundImage: `url(${ScreenShot})`,
               height: '243px',
               margin: '0px auto',
               minWidth: '300px',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center'
           }}></div>
           <hr className="mt-4"/>
           <Container className="d-flex justify-content-around">
           <Button title="View" href="" >
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faEye} />
           </Button>
           <Button title="Repository" href="" >
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faGithub} />
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
           <div className="d-flex justify-content-between">
               <div style={{
                   width: '40px',
                   height: '40px',
                   backgroundColor: 'darkgray'
               }}>1</div>
               <div style={{
                   width: '40px',
                   height: '40px',
                   backgroundColor: 'darkgray'
               }}>2</div>
               <div style={{
                   width: '40px',
                   height: '40px',
                   backgroundColor: 'darkgray'
               }}>3</div>
               <div style={{
                   width: '40px',
                   height: '40px',
                   backgroundColor: 'darkgray'
               }}>4</div>
               <div style={{
                   width: '40px',
                   height: '40px',
                   backgroundColor: 'darkgray'
               }}>5</div>
               <div style={{
                   width: '40px',
                   height: '40px',
                   backgroundColor: 'darkgray'
               }}>6</div>
           </div>
           </Container>
        </Container>
    )
}

export default KentState;