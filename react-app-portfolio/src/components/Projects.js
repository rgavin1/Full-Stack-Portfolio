import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import realEstateImage from '../assets/real estate web page.png';
import capstoneProjectImage from '../assets/Capstone.png';
import webPortfolioImage from '../assets/Web Developer Portfolio.png';
import '../styles/Projects.css';

const Projects = () => {

    return (
        <Container> 
            <h3 className="text-center">Projects</h3>
            <hr className="py-3" />
            <Container className="d-flex justify-content-around flex-wrap">
            <div title="Real Estate Project" className="projectStyles shadow rounded" >
                <Image src={realEstateImage} fluid />
                <div className="overlay">
                <h4>Title</h4>
                <p>Technologies Used</p>
                </div>
            </div>
            <div title="Capstone Project" className="projectStyles shadow rounded" rounded>
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
