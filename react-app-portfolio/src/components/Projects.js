import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
//import WeatherAppScreenShot from '../assets/WeatherApp/Weathe_ App_479.png';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import RealEstateImg from '../assets/RealEstate/realestate_479.png';
import CapstoneImg from '../assets/Capstone/Capstone_479.png';
import RestaurantImg from '../assets/Resturant/Barroco_New_479.png';
import PortfolioImg from '../assets/Portfolio/WebPortfolio_479.png';
import DigitalAgencyImg from '../assets/Digital Agency/pirty-500.png';
import MovieImage from '../assets/MovieApp/movie-479.png';
import { Controller, Scene } from 'react-scrollmagic';

class Projects extends Component {
    render(){
    return (
        <Controller globalSceneOptions={{triggerHook: 'onLeave'}}>
            <Scene>
        <div>
            <h3 className="text-center my-4">Projects</h3>
        <Container className="projects d-flex justify-content-around flex-wrap" id="projects" aria-label="projects react component"> 
            <div title="Movie Search Project" className="projectStyles rounded" >
                <Link to="/MovieSearch" aria-label="link to Movie Search Web Application Page">
                    <Image src={MovieImage} className="realEstateImg" aria-label="Screenshot image of Movie Search website" fluid />
                </Link>
            </div>
            <div title="Real Estate Project" className="projectStyles rounded" >
                <Link to="/RealEstateProj" aria-label="link to Real Estate Web Page">
                    <Image src={RealEstateImg} className="realEstateImg" aria-label="Screenshot image of website" fluid />
                </Link>
            </div>
            <div title="Digital Agency Project" className="projectStyles rounded" rounded>
                <Link to="/DigitalAgency" aria-label="Link to PIRTY Application information page">
                    <Image aria-label="Image of Pirty App"  src={DigitalAgencyImg} fluid />
                </Link>
            </div>
            <div title="Restaurant Project" className="projectStyles rounded" rounded>
                <Link to="/RestaurantProj" aria-label="Link to Restaurant information page">
                    <Image src={RestaurantImg} className="restaurantImg" aria-label="Image of restaurant webpage" />
                </Link>
            </div>
            <div title="Web Portfolio Project" className="projectStyles rounded" rounded>
                <Link to="/PortfolioProj" aria-label="Link to Web Portfolio Information Page" >
                    <Image src={PortfolioImg} className="portfolioImg" aria-label="Image of Web Portfolio Site" fluid />
                </Link>
            </div>
            <div title="Capstone Project" className="projectStyles rounded" rounded>
                <Link to="/CapstoneProj" aria-label="Link to Capstone Project" >
                    <Image src={CapstoneImg} className="capstoneImg" aria-label="Image of Capstone Project" fluid />
                </Link>
            </div>
            {/* 
            <div title="Weather Application Project" className="projectStyles rounded" rounded>
                <Link to="/WeatherApp" aria-label="Link to Weather Application information page">
                    <Image aria-label="Image of Weather App"  src={WeatherAppScreenShot} fluid />
                </Link>
            </div>
            */}
        </Container>
        </div>
        </Scene>
        </Controller>
    )}
}

export default Projects;
