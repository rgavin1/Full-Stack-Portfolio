import React from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Introduction from './Introduction';
import Hero from './Hero';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Hero />
        <Introduction />
        <Projects />
        <ContactMe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
