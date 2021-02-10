import React from 'react';
//styles
import './hompage.component.scss';
//components
import HeroSection from '../../components/hero-section/hero-section.component';
import AboutMe from '../../components/about-me/about-me.component';

const HomePage = () => (
    <div>
        <HeroSection />
        <AboutMe />
    </div>
)

export default HomePage;