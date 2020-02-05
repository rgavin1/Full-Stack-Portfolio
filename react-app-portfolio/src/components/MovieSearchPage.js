import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/RestaurantProj.css';
import ReactLogo from '../assets/reactjs-icon.svg';
import movieImg from '../assets/MovieApp/movie-479.png';
import SassLogo from '../assets/TechnologiesLogos/Sass_Logo_Color.svg';
import Firebaselogo from '../assets/TechnologiesLogos/Firebase_Logo.svg'
import { Image } from 'react-bootstrap';
import '../styles/MovieSearchPage.css';

const MovieSearchPage = () => {
    const technologiesStyle = {
        height: '25px',
        width: '25px'
    }
    return (
        <Container className="d-flex projectContainer mt-3">
        <Container className="my-auto">
       <h2 className="text-center" >Movie Search Application</h2>
       <div className=" mx-auto" style={{
           width: 'auto',
           height: '300px',
           overflow: 'hidden'
       }} >
        <Image src={movieImg} fluid/>
       </div>
       <hr className="mt-4"/>
       <Container className="d-flex justify-content-around">
       <Button title="View" target="_blank" href="https://movie-application-bdb8c.firebaseapp.com/
" className="d-flex">
           <FontAwesomeIcon style={{
               fontSize: '30px'
           }} icon={faEye} /><div className="my-auto ml-2">View</div>
       </Button>
       <Button title="Repository" target="_blank" href="https://github.com/rgavin1/Movie-App-Project" className="d-flex">
           <FontAwesomeIcon style={{
               fontSize: '30px'
           }} icon={faGithub} /><div className="my-auto ml-2">Github</div>
       </Button>
       </Container>
       <hr className="mt-4" />
       <h3>Description</h3>
       <p className="text-justify">One of the greatest things about the smartphone application market it is an excellent tool for movie and television lovers. Beyond just finding movies, tv shows, and getting actors or director information, these apps can enhance the moviegoing experience itself by making it easier to manage the personal collection. So I created this application to assist users in finding information about the favorite entertainer.
       </p>
       </Container>
       <Container className="my-auto pt-3">
       <Container className="justify-content-between">
       <div>
       <h5>Issues</h5>
       <ol>
           <li>
               <p>Not Complete</p>
           </li>
           <li>
               <p>Not Complete</p>
           </li>
           <li>
               <p>Not Complete</p>
           </li>
       </ol>
       </div>
       <div>
       <h5>Solutions</h5>
       <ol>
           <li>
               <p>Not Complete</p>
           </li>
           <li>
               <p>Not Complete</p>
           </li>
           <li>
               <p>Not Complete</p>
           </li>
       </ol>
       </div>
       </Container>
       <hr className="mt-4" />
       <h5 className="text-center mb-3">Technologies</h5>
       <Container className="d-flex justify-content-around flex-wrap">
       <img style={technologiesStyle} src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML5_Badge" title="HTML5" />
       <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3  logo" title="CSS3" />  
       <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" title="JavaScript" />
       <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
       <img style={technologiesStyle} src={SassLogo} alt="Sassy Logo" title="Sass" />
       <img style={{
            height: '20px',
            width: '80px'
           }} src={Firebaselogo} alt="Firebase Logo" title="Firebase" />
       </Container>
       </Container>
    </Container>
    )
}

export default MovieSearchPage;