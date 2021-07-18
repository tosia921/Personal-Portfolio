import React from 'react';
//styles
import './about-me.styles.scss';
//Animated Tech Icons 
import { AnimatedReactIcon, AnimatedNpmIcon, AnimatedGatsbyIcon, AnimatedGitHubIcon, AnimatedGitIcon, AnimatedJavaScriptIcon, AnimatedSassIcon, AnimatedCss3Icon, AnimatedHtml5Icon, AnimatedNextIcon } from '../animated-tech-icons/animated-tech-icons.component';
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
                <motion.div className='content-text' variants={techIconsContainer} initial="hidden" animate={controls} ref={element}>
                    <motion.div className='content-area grid-area-2' variants={fadeInOut} >
                        <p>Hello! My name is Tomasz and I am a self-taught front-end developer based in central Scotland. I love helping businesses and individuals make their online presence a smooth and visually appealing experience. When I am not coding or learning new technologies I enjoy playing piano and spend quality time with my family.</p>
                    </motion.div>
                </motion.div>
                <ProfficientWithArrow className='text-and-arrow'/>
                <motion.div className='grid-icons-container' variants={techIconsContainer} initial="hidden" animate={controls} ref={element}>
                    
                <AnimatedHtml5Icon className='html5-icon'/>
                <AnimatedCss3Icon className='css3-icon'/>
                <AnimatedSassIcon className='sass-icon'/>
                <AnimatedJavaScriptIcon className='javascript-icon'/>
                <AnimatedReactIcon className='react-icon'/>
                <AnimatedGatsbyIcon className='gatsby-icon'/>
                <AnimatedNextIcon className='next-icon'/>
                <AnimatedGitHubIcon className='github-icon'/>
                <AnimatedGitIcon className='git-icon'/>
                <AnimatedNpmIcon className='npm-icon'/>
                </motion.div>
                
            </motion.div>
            <SectionWave secondary/>
        </section>
    )
}

export default AboutMe;