import React from 'react';
//styles
import './contactmepage.styles.scss';
//custom components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import ContactSection from '../../components/contact-section/contact-section.component';

const ContactMePage = () => {
    return (
        <section>
            <div>
                <Header backgroundSecondary/>
                <ContactSection/>
            </div>
            <Footer/>
        </section>
    )
}

export default ContactMePage;