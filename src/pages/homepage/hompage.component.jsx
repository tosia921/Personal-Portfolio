import React from 'react';
//styles
import './hompage.component.scss';
//components
import HeroSection from '../../components/hero-section/hero-section.component';
import AboutMe from '../../components/about-me/about-me.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';

const HomePage = () => (
    <div>
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
    </div>
)

export default HomePage;