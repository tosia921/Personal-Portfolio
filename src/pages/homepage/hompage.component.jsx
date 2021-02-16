import React from 'react';
//styles
import './hompage.component.scss';
//components
import HeroSection from '../../components/hero-section/hero-section.component';
import AboutMe from '../../components/about-me/about-me.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';
import ContactSection from '../../components/contact-section/contact-section.component';
import Footer from '../../components/footer/footer.component';

const HomePage = () => (
    <div className='homepage'>
        <div className='content'>
            <HeroSection />
            <AboutMe />
            <ProjectsSection />
            <ContactSection />
        </div>
        <Footer/>
    </div>
)

export default HomePage;