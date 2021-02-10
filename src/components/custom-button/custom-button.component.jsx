import React from 'react';
//styles
import './custom-button.styles.scss';

const CustomButton = ({text}) => {
    return (
        <button className='custom-button'>{text}</button>
    )
}

export default CustomButton;