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
import { HeroSectionWaveAnimation, HeroSectionWaveAnimationMobile } from '../../components/hero-section-wave-animation/hero-section-wave-animation.component';




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
                <HeroSectionWaveAnimationMobile/>
                <div className='my-photo'/>
            </div>
            <HeroSectionWaveAnimation/>
            <HeroSectionWaveAnimation secondary/>
            
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