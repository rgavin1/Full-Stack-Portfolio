import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <Jumbotron fluid >
            <Container className="text-center">
                <h3>Hello, I'm Ramsey Gavin.</h3>
                <blockquote className="blockquote mb-0">
                    <p style={{
                    fontSize: '30px',
                    fontWeight: '300'
                    }}>
                I'm a full-stack web developer.
                </p>
                </blockquote>
            </Container>
        </Jumbotron>
    )
}

export default Hero;