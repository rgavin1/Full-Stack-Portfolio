import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Img1 from '../assets/fall-1072821_640.jpg';
import Img2 from '../assets/bench-560435_640.jpg';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <Container >
            <h3 className="text-center border-bottom ">Projects</h3>
            <Row className="py-3">
                <Col className="project" sm={12} md={4}>
                    <Image src={Img1} fluid />
                    <div className="projectOverlay text-center">
                        <h4>Real Estate</h4>
                        <p>M.E.R.N stack</p>
                        <Button variant="warning" >Learn More</Button>
                    </div>
                </Col>
                <Col className="project" sm={12} md={4}>
                    <Image src={Img2} fluid />
                    <div className="projectOverlay text-center">
                        <h4>Kent State Parking Meter</h4>
                        <p>W.A.W.P stack</p>
                        <Button variant="warning" >Learn More</Button>
                    </div>
                </Col>
                <Col className="project" sm={12} md={4}>
                    <Image src={Img2} fluid />
                    <div className="projectOverlay text-center">
                        <h4>Web Development Portfolio</h4>
                        <p>React.js</p>
                        <Button variant="warning" >Learn More</Button>
                    </div>
                </Col>
                <Col className="project" sm={12} md={4}>
                    <Image src={Img2} fluid />
                    <div className="projectOverlay text-center">
                        <h4>Monthly Budget Application</h4>
                        <p>M.E.R.N stack</p>
                        <Button variant="warning" >Learn More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;
