import React from 'react';
import { Container, Image } from 'react-bootstrap';
import WeatherAppScreenShot from '../assets/WeatherApp/Weathe_ App_479.png';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <Container id="projects" aria-label="projects react component"> 
            <h3 className="text-center my-4">Projects</h3>
            <hr className="py-3" />
            <Container className="d-flex justify-content-around flex-wrap" aria-label="The container that holds all completed projects" >
            <div title="Real Estate Project" className="projectStyles shadow rounded" >
                <Link to="/RealEstateProj" aria-label="link to Real Estate Web Page">
                    <div className="realEstateImg" aria-label="Screenshot image of website" ></div>
                </Link>
            </div>
            <div title="Capstone Project" className="projectStyles shadow rounded" rounded>
                <Link to="/CapstoneProj" aria-label="Link to Capstone Project" >
                    <div className="capstoneImg" aria-label="Image of Capstone Project" ></div>
                </Link>
            </div>
            <div title="Web Portfolio Project" className="projectStyles shadow rounded" rounded>
                <Link to="/PortfolioProj" aria-label="Link to Web Portfolio Information Page" >
                    <div className="portfolioImg" aria-label="Image of Web Portfolio Site"></div>
                </Link>
            </div>
            <div title="Restaurant Project" className="projectStyles shadow rounded" rounded>
                <Link to="/RestaurantProj" aria-label="Link to Restaurant information page">
                    <div className="restaurantImg" aria-label="Image of restaurant webpage"></div>
                </Link>
            </div>
            <div title="Weather Application Project" className="projectStyles shadow rounded" rounded>
                <Link to="/WeatherApp" aria-label="Link to Weather Application information page"><Image aria-label="Image of Weather App"  src={WeatherAppScreenShot} fluid /></Link>
            </div>
            </Container>
            <hr className="py-3" />
        </Container>
    )
}

export default Projects;
