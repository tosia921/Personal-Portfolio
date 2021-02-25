import React from 'react';
//styles
import './about-me.styles.scss';
//Animated Tech Icons 
import { AnimatedReactIcon, AnimatedNpmIcon, AnimatedGatsbyIcon, AnimatedGitHubIcon, AnimatedGitIcon, AnimatedJavaScriptIcon, AnimatedSassIcon, AnimatedCss3Icon, AnimatedHtml5Icon } from '../animated-tech-icons/animated-tech-icons.component';
//components
import SectionWave from '../section-wave/section-wave.component';
import ProfficientWithArrow from '../profficient-with-arrow/profficient-with-arrow.component';
//animations
import { motion } from 'framer-motion';
import { heroTextContainer } from '../../animations/framer-animations';

const AboutMe = () => {
    return (
        <section className='about-me'>
                <div className='section-title'>
                    <h2>About <span>Me</span></h2>
                </div>
            <div className='grids'>
                <div className='grid-content-container'>
                    <div className='content-area grid-area-2'>
                        <h3>Passionate</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='content-area grid-area-3'>
                        <h3>Hard working</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='content-area grid-area-4'>
                        <h3>Skilled</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='content-area grid-area-5'>
                        <h3>Fast Learner</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                
                <motion.div className='grid-icons-container' variants={heroTextContainer} initial="hidden" animate="show">
                    <ProfficientWithArrow className='text-and-arrow'/>
                    <AnimatedReactIcon className='react-icon'/>
                    <AnimatedNpmIcon className='npm-icon'/>
                    <AnimatedGatsbyIcon className='gatsby-icon'/>
                    <AnimatedGitHubIcon className='github-icon'/>
                    <AnimatedJavaScriptIcon className='javascript-icon'/>
                    <AnimatedGitIcon className='git-icon'/>
                    <AnimatedSassIcon className='sass-icon'/>
                    <AnimatedCss3Icon className='css3-icon'/>
                    <AnimatedHtml5Icon className='html5-icon'/>
                </motion.div>
                
            </div>
            <SectionWave secondary/>
        </section>
    )
}

export default AboutMe;