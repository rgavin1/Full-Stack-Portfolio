import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMobileAlt, 
    faTabletAlt, 
    faDesktop,
    faTachometerAlt,
    faUniversalAccess
} from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
    return (
        <Container >
            <Container className="text-justify">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Vitae tempus quam pellentesque nec nam aliquam sem et. Eget duis at tellus at urna condimentum mattis pellentesque id. Donec enim diam vulputate ut pharetra sit. Turpis egestas pretium aenean pharetra magna. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Lacinia at quis risus sed vulputate odio ut. Volutpat diam ut venenatis tellus in metus vulputate eu. Pharetra pharetra massa massa ultricies mi quis. Urna nunc id cursus metus aliquam eleifend mi. Adipiscing commodo elit at imperdiet dui. Hendrerit dolor magna eget est lorem. Mattis rhoncus urna neque viverra justo nec.</p>
            </Container>
            <h3>Skills</h3>
            <Row>
                <Col xs={12} sm={12} md={4}>
                <Card style={{ width: '18em', height: '10em' }}>
                <Card.Body >
                    <Card.Title className="d-flex justify-content-around" >
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <FontAwesomeIcon icon={faTabletAlt}/>
                        <FontAwesomeIcon icon={faDesktop}/>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center ">Responsive Web Design</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={12} sm={12} md={4}>
                <Card style={{ width: '18em', height: '10em' }}>
                <Card.Body >
                    <Card.Title className="d-flex justify-content-around" >
                        <FontAwesomeIcon icon={faTachometerAlt} />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center ">Performance</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={12} sm={12} md={4}>
                <Card style={{ width: '18em', height: '10em' }}>
                <Card.Body >
                    <Card.Title className="d-flex justify-content-around" >
                        <FontAwesomeIcon icon={faUniversalAccess} />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center ">Web Accessibility</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Introduction;