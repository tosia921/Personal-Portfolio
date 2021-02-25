import React from 'react';
//styles
import './resumepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ResumePdf from '../../components/resume-pdf/resume-pdf.component';
import SectionWave from '../../components/section-wave/section-wave.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';

const ResumePage = () => {
    return (
        <>
        <section className='resume-page'>
            <div>
                <Header backgroundSecondary/>
                <ResumePdf/>
                <div className='fixed-links-resume-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
            </div>
            <SectionWave secondary/>
        </section>
        <Footer/>
        </>
    )
}

export default ResumePage;