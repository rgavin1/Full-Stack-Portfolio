import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/Hero.css';
import ProfilePic from '../assets/profile pic.jpg';

const Hero = () => {
    return (
        <Jumbotron fluid>
            <Container className="profilePic">
                <Container className="mb-3">
                <div className="mx-auto" style={{
                    width: '175px',
                    height: '175px',
                    backgroundImage: `url(${ProfilePic})`,
                    borderRadius: '100%',
                    backgroundPosition: 'auto'
                }}></div>
                </Container>
                <Container className="my-auto">
                <h3 className="text-center">Hello, I'm Ramsey Gavin.</h3>
                <blockquote className="blockquote text-center mb-0">
                    <p style={{
                    fontSize: '30px',
                    fontWeight: '300'
                    }}>
                I'm a Web developer.
                </p>
                </blockquote>
                </Container>
            </Container>
        </Jumbotron>
    )
}

export default Hero;