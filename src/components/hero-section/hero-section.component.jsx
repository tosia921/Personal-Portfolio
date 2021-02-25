import React from 'react';
//styles
import './hero-section.styles.scss'
//components
import Header from '../header/header.component';
import { Link } from 'react-router-dom';
import SectionWave from '../section-wave/section-wave.component';
import GithubLink from '../github-link/github-link.component';
import LinkedInLink from '../linkedin-link/linkedin-link.component';
import ResumeLink from '../resume-link/resume-link.component';
//animated svg paths
import { HeroSectionWaveAnimation, HeroSectionWaveAnimationMobile } from '../../components/hero-section-wave-animation/hero-section-wave-animation.component';
//animations
import { motion } from 'framer-motion';
import { heroTextAnimation, heroTextContainer, heroImageAnimations, leftLinksAnimations } from '../../animations/framer-animations';



const HeroSection = () => {
    return (
        <section className='hero-section'>
            <Header/>
            <div className='content-container'>
                <motion.div className='content' variants={heroTextContainer} initial="hidden" animate="show">
                    <motion.p className='p-hello' variants={heroTextAnimation}>hello, I'm</motion.p>
                    <motion.h1 variants={heroTextAnimation}>Tomasz</motion.h1>
                    <motion.h1 className='big' variants={heroTextAnimation}>POSIADALA</motion.h1>
                    <motion.p className='p-front' variants={heroTextAnimation}>Front End Developer</motion.p>
                    <motion.Link className='hero-section-button' to='/projects' variants={heroTextAnimation}>view projects</motion.Link>
                </motion.div>
                <HeroSectionWaveAnimationMobile/>
                <motion.div className='my-photo' variants={heroImageAnimations}/>
            </div>
            <HeroSectionWaveAnimation/>
            <HeroSectionWaveAnimation secondary/>
            
            <SectionWave />
            <motion.div className='fixed-links' variants={leftLinksAnimations} initial="hidden" animate="show">
                <GithubLink hoverRight variants={leftLinksAnimations}/>
                <LinkedInLink hoverRight variants={leftLinksAnimations}/>
                <ResumeLink hoverRight variants={leftLinksAnimations}/>
            </motion.div>
        </section>
    )
}

export default HeroSection;