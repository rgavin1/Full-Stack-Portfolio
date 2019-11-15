import React, { useRef, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import realEstateImage from '../assets/real estate web page.png';
import capstoneProjectImage from '../assets/Capstone.png';
import webPortfolioImage from '../assets/Web Developer Portfolio.png';
import '../styles/Projects.css';
import { TweenMax, Power3 } from 'gsap';


const Projects = () => {
    let leftSide = useRef(null);
    let rightSide = useRef(null);

    useEffect(() => {
        TweenMax.from(leftSide, .8, { x: '-100%', opacity: 0, delay: 3 });
        TweenMax.from(rightSide, .8, { x: '100%', opacity: 0, delay: 3 });
    }, []);
    return (
        <Container> 
            <h3 className="text-center">Projects</h3>
            <hr className="py-3" />
            <Container className="d-flex justify-content-around flex-wrap">
            <div ref={(element) => leftSide = element} title="Real Estate Project" className="projectStyles shadow rounded" >
                <Image src={realEstateImage} fluid />
                <div className="overlay">
                <h4>Title</h4>
                <p>Technologies Used</p>
                </div>
            </div>
            <div ref={(element) => rightSide = element} title="Capstone Project" className="projectStyles shadow rounded" rounded>
                <Image src={capstoneProjectImage} fluid />
            </div>
            <div title="Web Portfolio Project" className="projectStyles shadow rounded" rounded>
                <Image src={webPortfolioImage} fluid />
            </div>
            <div title="Restaurant Project" className="projectStyles shadow rounded" rounded>
                <Image src={webPortfolioImage} fluid />
            </div>
            </Container>
            <hr className="py-3" />
        </Container>
    )
}

export default Projects;
