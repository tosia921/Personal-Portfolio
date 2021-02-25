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
import { techIconsContainer, fadeInOut } from '../../animations/framer-animations';
import { useScroll } from '../../animations/useScroll';

const AboutMe = () => {
    const [element, controls] = useScroll();
    return (
        <section className='about-me'>
                <motion.div className='section-title' variants={fadeInOut} initial="hidden" animate={controls} ref={element}>
                    <h2>About <span>Me</span></h2>
                </motion.div>
            <motion.div className='grids'>
                <motion.div className='grid-content-container' variants={techIconsContainer} initial="hidden" animate={controls} ref={element}>
                    <motion.div className='content-area grid-area-2' variants={fadeInOut} >
                        <h3>Passionate</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </motion.div>
                    <motion.div className='content-area grid-area-3' variants={fadeInOut} >
                        <h3>Hard working</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </motion.div>
                    <motion.div className='content-area grid-area-4' variants={fadeInOut} >
                        <h3>Skilled</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </motion.div>
                    <motion.div className='content-area grid-area-5' variants={fadeInOut} >
                        <h3>Fast Learner</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </motion.div>
                </motion.div>
                
                <motion.div className='grid-icons-container' variants={techIconsContainer} initial="hidden" animate={controls} ref={element}>
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
                
            </motion.div>
            <SectionWave secondary/>
        </section>
    )
}

export default AboutMe;