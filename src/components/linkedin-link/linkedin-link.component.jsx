import React from 'react';
import './linkedin-link.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedinLogo } from '../../assets/LinkedinLogo.svg';

const LinkedInLink = ({hoverRight}) => {
    return (
            <Link className='linkedin-link-wrapper' to={{pathname: 'https://www.linkedin.com/in/tomasz-posiada%C5%82a-3a05391b0/' }} target="_blank" >
                <div className={`${hoverRight ? 'linkedin-link-container hover-right' : 'linkedin-link-container'}`}>
                    <p className='linkedin-link-content'>LinkedIn</p>
                    <LinkedinLogo className='linkedin-logo'/>
                </div>
            </Link> 
    )
}

export default LinkedInLink;