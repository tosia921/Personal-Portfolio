import React from 'react';
import './resume-link.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as ResumeIcon } from '../../assets/ResumeIcon.svg';

const ResumeLink = ({hoverRight}) => {
    return (
        <Link className='resume-link-wrapper' to={{pathname: 'https://docs.google.com/document/d/1Xz-qTOdY-oPh_QP99hI9lA9hSgwQ_7bjyQqMyoxHYss/edit?usp=sharing' }} target="_blank" >
                <div className={`${hoverRight ? 'resume-link-container hover-right' : 'resume-link-container'}`}>
                    <p className='resume-link-content'>Resume</p>
                    <ResumeIcon className='resume-logo'/>
                </div>
            </Link> 
    )
}

export default ResumeLink;