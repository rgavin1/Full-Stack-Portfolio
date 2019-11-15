import React, { useRef, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/Hero.css';
import { TweenMax, Power3 } from 'gsap';
import ProfilePic from '../assets/profile pic.jpg';

const Hero = () => {
    let jumbotron = useRef(null);
    let into = useRef(null);

    useEffect(() => {
        TweenMax.from(jumbotron, 1.5, { x: "-100%", opacity: 1, ease: Power3.easeInOut, delay: 1});
        TweenMax.from(into, 1, { y: "200%", opacity: 0, ease: Power3.easeInOut, delay: 3} );
    }, []);

    return (
        <Jumbotron fluid ref={(element) => jumbotron = element }>
            <Container className="d-flex justify-content-center profilePic" ref={(element) => into = element}>
                <div style={{
                    width: '175px',
                    height: '175px',
                    backgroundImage: `url(${ProfilePic})`,
                    borderRadius: '100%',
                    backgroundPosition: 'auto'
                }}></div>
                <div className="my-auto ml-5">
                <h3>Hello, I'm Ramsey Gavin.</h3>
                <blockquote className="blockquote mb-0">
                    <p style={{
                    fontSize: '30px',
                    fontWeight: '300'
                    }}>
                I'm a full-stack web developer.
                </p>
                </blockquote>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default Hero;