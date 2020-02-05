import React from 'react';
import Navigation from './Navigation';
import Main from './Main';
import RealEstateProj from './RealEstateProject';
import CapstoneProj from './KentState';
import PortfolioProj from './FullStack';
import RestaurantProj from './RestaurantProj';
import WeatherApp from './WeatherApp';
import DigitalAgency from './DigitalAgency';
import MovieSearch from './MovieSearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';


const App = () => {
  return (
    <Router>
      <div className="App" id="App">
        <Navigation />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/RealEstateProj" component={RealEstateProj} />
            <Route path="/CapstoneProj" component={CapstoneProj} />
            <Route path="/PortfolioProj" component={PortfolioProj} />
            <Route path="/RestaurantProj" component={RestaurantProj} />
            <Route path="/WeatherApp" component={WeatherApp} />
            <Route path="/DigitalAgency" component={DigitalAgency} />
            <Route path="/MovieSearch" component={MovieSearch} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
