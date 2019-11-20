import React from 'react';
import { Container, Image } from 'react-bootstrap';
import realEstateImage from '../assets/real estate web page.png';
import capstoneProjectImage from '../assets/Capstone.png';
import webPortfolioImage from '../assets/Web Developer Portfolio.png';
import RestaurantScreenShot from '../assets/Resturant.png';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <Container id="projects"> 
            <h3 className="text-center my-4">Projects</h3>
            <hr className="py-3" />
            <Container className="d-flex justify-content-around flex-wrap">
            <div title="Real Estate Project" className="projectStyles shadow rounded" >
                <Link to="/RealEstateProj">
                    <Image src={realEstateImage} fluid />
                        <div className="overlay">
                        <h4>Title</h4>
                        <p>Technologies Used</p>
                        </div>
                </Link>
            </div>
            <div title="Capstone Project" className="projectStyles shadow rounded" rounded>
                <Link to="/CapstoneProj"><Image src={capstoneProjectImage} fluid /></Link>
            </div>
            <div title="Web Portfolio Project" className="projectStyles shadow rounded" rounded>
                <Link to="/PortfolioProj" ><Image src={webPortfolioImage} fluid /></Link>
            </div>
            <div title="Restaurant Project" className="projectStyles shadow rounded" rounded>
                <Link to="/RestaurantProj" ><Image src={RestaurantScreenShot} fluid /></Link>
            </div>
            </Container>
            <hr className="py-3" />
        </Container>
    )
}

export default Projects;
