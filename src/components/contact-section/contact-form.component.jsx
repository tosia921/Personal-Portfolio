import React from 'react';
import './contact-form.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import useForm from './useForm';
import validate from './validate-info';



const ContactForm = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input 
                        id='name' 
                        type='text' 
                        name='name' 
                        className='form-input' 
                        placeholder='Enter your name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className='error-message'>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input 
                        id='email' 
                        type='text' 
                        name='email' 
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='message' className='form-label'>
                        Message
                    </label>
                    <textarea 
                        id='message'
                        type='textarea' 
                        name='message'
                        rows='15'
                        className='form-input form-input-message' 
                        placeholder='Enter your message here...'
                        value={values.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p className='error-message'>{errors.message}</p>}
                </div>
                <CustomButton text='Send' type='submit' />
            </form>
        </div> 
    )
}

export default ContactForm;
