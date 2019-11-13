import React from 'react';
import { Container } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RestaurantProj = () => {
    return (
        <Container>
           <h1>Restaurant Project</h1>
           <div>Img</div>
           <div>Description</div>
           <div>Issues</div>
           <div>Solutions</div>
           <div>Technologies</div>
           <div>Application<FontAwesomeIcon icon={faEye} /></div>
           <div>Github Link<FontAwesomeIcon icon={faGithub} /></div>  
        </Container>
    )
}

export default RestaurantProj;