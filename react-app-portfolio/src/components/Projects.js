import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
    const projectContainer = {
        minHeight: '400px',
        maxHeight: '10em'
    }
    return (
        <Container>
            <h3>Projects</h3>
            <Row style={projectContainer}>
                <Col xs={12} sm={12} md={4} className="bg-primary">1/1</Col>
                <Col xs={12} sm={12} md={4} className="bg-info">1/2</Col>
                <Col xs={12} sm={12} md={4} className="bg-danger">1/3</Col>
            </Row>
            <Row style={projectContainer}>
                <Col xs={12} sm={12} md={4} className="bg-light">2/1</Col>
                <Col xs={12} sm={12} md={4} className="bg-warning">2/2</Col>
                <Col xs={12} sm={12} md={4} className="bg-success">2/3</Col>
            </Row>
            <Row style={projectContainer}>
                <Col xs={12} sm={12} md={4} className="bg-danger">3/1</Col>
                <Col xs={12} sm={12} md={4} className="bg-dark">3/2</Col>
                <Col xs={12} sm={12} md={4} className="bg-primary">3/3</Col>
            </Row>
        </Container>
    )
}

export default Projects;
