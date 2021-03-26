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
                        <p>There's is nothing as exciting as seeing your application online, getting the complicated feature to work, or finally understanding that difficult concept about the new technology you have been learning. All of the above applies to me when I code which makes me absolutely certain that it's a passion that will never go away.</p>
                    </motion.div>
                    <motion.div className='content-area grid-area-3' variants={fadeInOut} >
                        <h3>Hard working</h3>
                        <p>When you do what you love it never feels like hard work. That's why I can spend several hours developing. Don't get me wrong breaks are important to clear your mind, but even on my breaks, all I can think of is coding!</p>
                    </motion.div>
                    <motion.div className='content-area grid-area-4' variants={fadeInOut} >
                        <h3>Fast Learner</h3>
                        <p>One thing about teaching yourself how to code is that you learn how to find the best resources,  be patient and dig into topics very deep to fully understand them. Only by practice, you get better and faster at this, which I have plenty of.</p>
                    </motion.div>
                    <motion.div className='content-area grid-area-5' variants={fadeInOut} >
                        <h3>Team Player</h3>
                        <p>A very important skill in the tech-related industry. No one is an expert in every topic, You have to be able to clearly communicate, sometimes very complex problems/ideas. I am a very approachable person that enjoys helping others and values nothing more than constructive feedback about me or my work.</p>
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