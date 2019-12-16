import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../styles/Hero.css';
import ProfilePic from '../assets/profile pic.jpg';

const Hero = () => {
    return (
        <Jumbotron>
            <div className="overlay">
                <div className="image-wrapper d-flex justify-content-center flex-wrap">
                    <div className="text-center">
                        <img className="profilePic" src={ProfilePic} alt="Ramsey Gavin's profile" />
                    </div>
                    <span className="introduction-wrapper">
                        <h3 className="text-center">Hello, I'm Ramsey Gavin.</h3>
                        <span className="text-center">
                            <p>I'm a Web developer.</p>
                        </span>
                    </span>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Hero;