import React from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Introduction from './Introduction';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
