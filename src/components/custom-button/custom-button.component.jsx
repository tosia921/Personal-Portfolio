import React from 'react';
//styles
import './custom-button.styles.scss';
//svgs
import EyeIcon from '../../assets/eyeIcon.svg';
const CustomButton = ({text, center, eye, code, ...otherProps}) => {
    return (
        <button className={center ? 'custom-button center' : 'custom-button'}{...otherProps}>
            {eye && <img src={EyeIcon} alt='eye icon' className='eye-icon'/>}
            {text}
        </button>
    )
}

export default CustomButton;