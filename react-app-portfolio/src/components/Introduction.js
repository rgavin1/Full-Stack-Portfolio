import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMobileAlt, 
    faDesktop,
    faTachometerAlt,
    faUniversalAccess,
    faTabletAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    faSafari, 
    faInternetExplorer, 
    faEdge, 
    faChrome, 
    faFirefox,
 } from '@fortawesome/free-brands-svg-icons';
import '../styles/Introduction.css';
import { Controller, Scene } from 'react-scrollmagic';


const Introduction = () => {
    return (
        <Container fluid className="about-background-image">
        <div className="about-overlay">
        <Controller>
            <Scene triggerElement="#about-heading" classToggle={['.about-para', 'fade-in']} indicators={true}>
                <Container className="about-wrapper text-justify">
                    <h3 className="text-center my-5" id="about-heading">About Me</h3>
                    <p className="about-para">I am a current Kent State University grad and web developer from Akron, Ohio. I enjoy creating and developing responsive websites and web applications. Currently, I have many completed applications using the frontend technology Reactjs, with one of those being constructed using the M.E.R.N stack. I am a driven and dedicated individual with dreams of becoming a  Full-Stack Developer. -- <a href="#projects" >Check out my projects.</a>
                    </p>
                </Container>
            </Scene>
            <Scene triggerElement="#about-heading" classToggle={['.objectives', 'fade-in']}>
            <Container className="d-flex justify-content-around flex-wrap skills-wrapper">
                <div class="hex-row">
                    <div class="hex">
                        <div class="top"></div>
                        <div class="center">
                            <div className="d-flex justify-content-around flex-wrap responsive-device-wrapper">
                                <span><FontAwesomeIcon icon={faMobileAlt}/></span>
                                <span><FontAwesomeIcon icon={faTabletAlt}/></span>
                                <span><FontAwesomeIcon icon={faDesktop}/></span>
                            </div>
                        </div>
                        <div class="bottom"></div>
                    </div>
                    <div class="hex">
                        <div class="top"></div>
                        <div class="center">
                            <div><FontAwesomeIcon icon={faTachometerAlt} /></div>
                        </div>
                        <div class="bottom"></div>
                    </div>
                </div>
                <div class="hex-row even">
                    <div class="hex">
                        <div class="top"></div>
                        <div class="center">
                            <div><FontAwesomeIcon icon={faUniversalAccess} /></div>
                            </div>
                        <div class="bottom"></div>
                    </div>
                    <div class="hex">
                        <div class="top"></div>
                        <div class="center">
                            <div className="d-flex justify-content-around flex-wrap browser-wrapper">
                                <span><FontAwesomeIcon icon={faSafari} /></span>
                                <span><FontAwesomeIcon icon={faInternetExplorer} /></span>
                                <span><FontAwesomeIcon icon={faFirefox} /></span>
                                <span><FontAwesomeIcon icon={faEdge} /></span>
                                <span><FontAwesomeIcon icon={faChrome} /></span>
                            </div>
                        </div>
                        <div class="bottom"></div>
                    </div>
                </div>
        </Container>
        </Scene>
        </Controller>
        </div> 
        </Container>   
    )
}

export default Introduction;