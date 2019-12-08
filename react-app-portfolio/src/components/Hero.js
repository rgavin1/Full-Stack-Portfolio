import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/Hero.css';
import ProfilePic from '../assets/profile pic.jpg';

const Hero = () => {
    return (
        <Jumbotron>
            <div className="image-wrapper d-flex justify-content-center flex-wrap">
                <div className="text-center">
                    <img className="profilePic" src={ProfilePic} alt="Ramsey Gavin's profile picture 150px by 150px" />
                </div>
                <span className="introduction-wrapper">
                    <h3 className="text-center">Hello, I'm Ramsey Gavin.</h3>
                    <span className="text-center">
                        <p>I'm a Web developer.</p>
                    </span>
                </span>
            </div>
        </Jumbotron>
    )
}

export default Hero;