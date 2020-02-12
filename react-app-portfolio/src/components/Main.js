import React, { lazy, Suspense } from 'react';
import Hero from './Hero';
const Projects = lazy( () => import ('./Projects'));
const ContactMe = lazy( () => import ('./ContactMe'));
const Introduction = lazy( () => import ('./Introduction'));


const Main = () => {
    return (
        <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <Introduction />
            <Projects />        
            <ContactMe />
        </Suspense>
        </div>
    )
}

export default Main;