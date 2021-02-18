import React from 'react';
//styles
import './projectspage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';

const ProjectsPage = () => {
    return (
        <section className='projects-page'>
            <div>
                <Header backgroundPrimary/>
                <div className='fixed-links-projects-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
                <ProjectsSection/>
            </div>
            <Footer backgroundSecondary/>
        </section>
    )
}

export default ProjectsPage;
