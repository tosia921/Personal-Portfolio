import React from 'react';
//styles
import './aboutmepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import AboutMe from '../../components/about-me/about-me.component';

const AboutMePage = () => {
    return (
        <section>
            <div>
                <Header backgroundSecondary/>
                <AboutMe/>
            </div>
            <Footer/>
        </section>
    )
}

export default AboutMePage;
