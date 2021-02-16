import React from 'react';
//styles
import './projectspage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';

const ProjectsPage = () => {
    return (
        <section className='projects-page'>
            <div className='projects-page-content'>
                <Header backgroundSecondary/>
                <ProjectsSection/>
            </div>
            <Footer/>
        </section>
    )
}

export default ProjectsPage;
