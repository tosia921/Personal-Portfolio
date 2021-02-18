import React from 'react';
//styles
import './aboutmepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import AboutMe from '../../components/about-me/about-me.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';

const AboutMePage = () => {
    return (
        <section className='aboutme-page'>
            <div>
                <Header backgroundSecondary/>
                <div className='fixed-links-aboutme-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
                <AboutMe/>
            </div>
            <Footer/>
        </section>
    )
}

export default AboutMePage;
