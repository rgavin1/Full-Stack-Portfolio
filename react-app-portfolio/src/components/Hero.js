import React, { useRef, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../styles/Hero.css';
import ProfilePic from '../assets/profile pic.jpg';
import { TimelineLite, Power3 } from 'gsap';

const Hero = () => {

    let hello = useRef(null);
    let name = useRef(null);
    let level = useRef(null);

    let timeLine = new TimelineLite();

    useEffect(() => {
        timeLine.from(hello, 1.2, { y: '100', ease: Power3.easeInOut })
        .from(name, 1.2, { y: '100', ease: Power3.easeInOut })
        .from(level, 1.2, { y: '100', opacity: 0, ease: Power3.easeInOut })
    });

    

    return (
        <Jumbotron>
            <div className="overlay">
                <div className="image-wrapper d-flex justify-content-center flex-wrap">
                    <div className="text-center">
                        <img className="profilePic" src={ProfilePic} alt="Ramsey Gavin's profile" />
                    </div>
                    <span className="introduction-wrapper">
                        <h3 className="text-center overflow-hidden">
                            <ul>
                                <li ref={ (element) => hello = element }>Hello</li>
                                <li ref={ (element) => name = element }>I'm Ramsey</li>
                                <li ref={ (element) => level = element }><p>Junior Web developer</p></li>
                            </ul>
                        </h3>
                    </span>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Hero;