import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Main from './Main';
import RealEstateProj from './RealEstateProject';
import CapstoneProj from './KentState';
import PortfolioProj from './FullStack';
import RestaurantProj from './RestaurantProj';
import WeatherApp from './WeatherApp';
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
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
