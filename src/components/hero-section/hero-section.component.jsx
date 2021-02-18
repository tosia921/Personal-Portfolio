import React from 'react';
//styles
import './hero-section.styles.scss'
//components
import Header from '../header/header.component';
import CustomButton from '../custom-button/custom-button.component';
import SectionWave from '../section-wave/section-wave.component';
import GithubLink from '../github-link/github-link.component';
import LinkedInLink from '../linkedin-link/linkedin-link.component';
import ResumeLink from '../resume-link/resume-link.component';
//animated svg paths
import { ReactComponent as Path1 } from '../../assets/PATH FIRST.svg';
import { ReactComponent as Path2 } from '../../assets/PATH SECOND.svg';



const HeroSection = () => {
    return (
        <section className='hero-section'>
            <Header/>
            
            <div className='content-container'>
                <div className='content'>
                    <p>hello, I'm</p>
                    <h1>Tomasz</h1>
                    <h1 className='big'>POSIADALA</h1>
                    <p>Front End Developer</p>
                    <CustomButton text='VIEW PROJECTS' />
                </div>
                <div className='my-photo'/>
            </div>
            
            
            <SectionWave />
            <div className='fixed-links'>
                <GithubLink hoverRight />
                <LinkedInLink hoverRight />
                <ResumeLink hoverRight />
            </div>
        </section>
    )
}

export default HeroSection;