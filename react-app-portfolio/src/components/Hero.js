import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <Jumbotron fluid className="bgImage">
            <Container>
                <h1>Fluid jumbotron</h1>
                <blockquote className="blockquote mb-0">
                    <p style={{
                    fontSize: '30px',
                    fontWeight: '300'
                    }}>
                Do not go where the path may lead, go instead where there is no path and leave a trail.
                </p>
                <footer className="blockquote-footer">
                Ralph Waldo Emerson <cite title="Source Title">Source Title</cite>
      </footer>
                </blockquote>
            </Container>
        </Jumbotron>
    )
}

export default Hero;