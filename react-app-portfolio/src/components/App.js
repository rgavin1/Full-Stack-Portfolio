import Navigation from './Navigation';
import RealEstateProj from './RealEstateProject';
import CapstoneProj from './KentState';
import PortfolioProj from './FullStack';
import RestaurantProj from './RestaurantProj';
import WeatherApp from './WeatherApp';
import DigitalAgency from './DigitalAgency';
import MovieSearch from './MovieSearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import React, { Component, lazy, Suspense } from 'react';
const Main = lazy( () => import ('./Main'));


class App extends Component {
  render(){
  return (
    <Router>
      <div className="App" id="App">
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
      </div>
    </Router>
  );
  }
}

export default App;
