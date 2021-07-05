//Custom hook that handles form submit

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
    const[values, setValues] = useState({
        name:'',
        email:'',
        message:''
    })
    
    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);

        emailjs.sendForm('service_1l4l8lj', 'template_abtjyck', e.target, 'user_x9ISuXKhT8DwfJq5dpgDk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                 console.log(error.text);
            });
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            }
        },
        [errors, isSubmitting, callback]
    )
    
    return { handleChange, values, handleSubmit, errors };
}

export default useForm;