import React, { useState } from 'react';
//styles
import './contact-section.styles.scss';
//custom components
import ContactForm from "./contact-form.component";
import FormSuccess from './form-success.component';
import SectionWave from '../section-wave/section-wave.component';

const ContactSection = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm () {
        setIsSubmitted(true)
    }
    return (
        <section className='contact-section'>
            <h2 className='section-title'><span>C</span>ontact</h2>
            <p className='contact-section-message'>Fell free to drop me a message, I will respond as soon as possible!</p>
            {
                !isSubmitted ? <ContactForm submitForm={submitForm}/> : <FormSuccess />
            }
            <SectionWave secondary />
        </section>

    )
}

export default ContactSection;