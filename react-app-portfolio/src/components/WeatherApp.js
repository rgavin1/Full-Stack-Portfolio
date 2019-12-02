import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/WeatherApp.css';
import BootstrapLogo from '../assets/bootstrap-solid.svg';
import ReactLogo from '../assets/reactjs-icon.svg';
import DarkSkyLogo from '../assets/WeatherApp/Dark_Sky_logo.png';

const WeatherApp = () => {
    const technologiesStyle = {
        height: '25px',
        width: '25px'
    }
    return (
        <Container className="d-flex projectContainer mt-3">
        <Container className="my-auto">
       <h2 className="text-center" >Weather Application</h2>
       <div className="shadow projectImg"></div>
       <hr className="mt-4"/>
       <Container className="d-flex justify-content-around">
       <Button title="View" href="" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faEye} /><div className="my-auto ml-2">View</div>
           </Button>
           <Button title="Repository" href="https://github.com/rgavin1/WeatherApp" target="_blank" className="d-flex">
               <FontAwesomeIcon style={{
                   fontSize: '30px'
               }} icon={faGithub} /><div className="my-auto ml-2">Github</div>
           </Button>
       </Container>
       <hr className="mt-4" />
       <h3>Description</h3>
       <p className="text-justify">I hated getting caught in the rain! So I developed the "Rain or Shine" weather application to keep me up-to-date on severe weather conditions. This application uses Google's Place Autocomplete service, which is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and geographic bounds. The service is used along with The Dark Sky API to look up the weather current weather conditions anywhere in the world. Both services served to develop a superior web application that provides minute-by-minute, hour-by-hour, and day-by-day forecasts out to five days.
       </p>
       </Container>
       <Container className="my-auto pt-3">
       <Container className="justify-content-between">
       <div>
       <h5>Issues</h5>
       <ol>
            <li>
               <p>I had complications inserting data into an empty array located in the state from the Dark Sky API response.
               </p>
           </li>
           <li>
               <p>One issue that took some time was getting the Place AutoComplete API to function together with The Dark Sky API.
               </p>
           </li>
           <li>
               <p>Another issue was properly getting The Dark Sky SVG's to render to the page correctly.
               </p>
           </li>
       </ol>
       </div>
       <div>
       <h5>Solutions</h5>
       <ol>
           <li>
               <p>I found a simple solution on Stackoverflow.com, where the individual suggested using a 'for' loop to read the data into a temporary variable while being read into the application.
               </p>
           </li>
           <li>
               <p>There were no solutions online for the problem, so I had to make some adjustments to the Place AutoComplete asynchronous 'handle select' function. I needed to prevent the component from rerendering and get the information required to make a proper request to the Dark Sky API.
               </p>
           </li>
           <li>
               <p>The problem still exists. There is no way to prevent the SVGs from flickering with another location is rendered to the page.</p>
           </li>
       </ol>
       </div>
       </Container>
       <hr className="mt-4" />
       <h5 className="text-center mb-3">Technologies</h5>
       <Container className="d-flex justify-content-around flex-wrap">
        <img style={technologiesStyle} src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML5_Badge" title="HTML5" />
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3  logo" title="CSS3" />  
        <img style={technologiesStyle} src={BootstrapLogo} alt="Bootstrap B Solid Logo" title="Bootstrap" />
        <img style={technologiesStyle} src={ReactLogo} alt="Reactjs Logo" title="React" />
        <img style={technologiesStyle} src="https://upload.wikimedia.org/wikipedia/commons/4/48/GoogleMaps_logo.svg" alt="Google Places AutoComplete" title="Google Places AutoComplete" />
        <img style={{
            height: '33px',
            width: '95px'
           }} src={DarkSkyLogo} alt="The Dark Sky Logo" title="The Dark Sky API" />
       </Container>
       </Container>
    </Container>
    )
}

export default WeatherApp;
