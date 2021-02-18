import React from 'react';
//styles
import './contactmepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ContactSection from '../../components/contact-section/contact-section.component';
//fixed links
import GithubLink from '../../components/github-link/github-link.component';
import LinkedInLink from '../../components/linkedin-link/linkedin-link.component';
import ResumeLink from '../../components/resume-link/resume-link.component';

const ContactMePage = () => {
    return (
        <section className='contactme-page'>
            <div>
                <Header backgroundSecondary/>
                <div className='fixed-links-contact-page'>
                    <GithubLink hoverRight />
                    <LinkedInLink hoverRight />
                    <ResumeLink hoverRight />
                </div>
                <ContactSection/>
                
            </div>
            <Footer/>
        </section>
    )
}

export default ContactMePage;