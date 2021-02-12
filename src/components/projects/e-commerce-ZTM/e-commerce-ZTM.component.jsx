import React from 'react';
//styles
import './e-commerce-ZTM.styles.scss';
//svg
import xIcon from '../../../assets/xIcon.svg';

const ECommerceZTM = () => {
    return (
        <div className='project-ztm'>
            <div className='screenshot'></div>
            <div className='details'>
                <div className='x-button'>
                    <img src={xIcon} alt='exit icon'/>
                </div>
            </div>
        </div>
    )
}

export default ECommerceZTM;