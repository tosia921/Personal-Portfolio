import React from 'react';
//styles
import './projectspage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';

const ProjectsPage = () => {
    return (
        <section>
            <div>
                <Header backgroundPrimary/>
                <ProjectsSection/>
            </div>
            <Footer backgroundSecondary/>
        </section>
    )
}

export default ProjectsPage;
