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
            <Container className="text-justify my-5">
            <h3 className="text-center border-bottom py-3">About Me</h3>
            <p style={{
                lineHeight: '1.7em',
                fontWeight: '400',
                letterSpacing: '.08em',
                fontSize: '1.1em'
            }}>Ramsey Gavin loves coding, photography, fitness and finding new challenges. He does not enjoy talking about himself in the 3rd person. He currently serves as a shipping clerk at KaneIsAble. Ramsey is currently teaching himself Reactjs. In May 2019, he earned a BS in Digital Science and an Associates of Science from Kent State University. For more info, please check out his projects.</p>
            <h3>Skills</h3>
            <Row className="m-auto">
                <Col xs={12} sm={12} md={true} lg={true}>
                <Card style={{
                    height: '10em',
                    marginTop: '10px' 
                    }}>
                <Card.Body >
                    <Card.Title className="d-flex justify-content-around" 
                    style={{
                        height: 'inherit',
                        fontSize: '4em',
                        color: 'rgba(236, 155, 89, 0.5)'
                    }}
                    >
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <FontAwesomeIcon icon={faTabletAlt}/>
                        <FontAwesomeIcon icon={faDesktop}/>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center ">Responsive Web Design</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={12} sm={12} md={true} lg={true}>
                <Card style={{  
                    height: '10em',
                    marginTop: '10px'
                    }}>
                <Card.Body >
                    <Card.Title className="d-flex justify-content-around"
                    style={{
                        fontSize: '100px'
                    }} >
                        <FontAwesomeIcon className="text-success" icon={faTachometerAlt} />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center ">Performance</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={12} sm={12} md={true} lg={true}>
                <Card style={{ 
                    height: '10em',
                    marginTop: '10px'
                    }}>
                <Card.Body >
                    <Card.Title className="d-flex justify-content-around" 
                    style={{
                        fontSize: '100px'
                    }}
                    >
                        <FontAwesomeIcon className="text-primary" icon={faUniversalAccess} />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center ">Web Accessibility</Card.Subtitle>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container >
        </Container >
    )
}

export default Introduction;