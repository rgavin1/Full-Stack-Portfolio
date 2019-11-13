import React from 'react';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Introduction from './Introduction';
import Hero from './Hero';

const Main = () => {
    return (
        <div>
        <Hero />
        <Introduction />
        <Projects />
        <ContactMe />
        </div>
    )
}

export default Main;