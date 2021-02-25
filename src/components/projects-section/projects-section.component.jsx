import React, { useState } from 'react';
//styles
import './projects-section.styles.scss';
//wave svg
import SectionWave from '../section-wave/section-wave.component';
//components
import CustomButton from '../custom-button/custom-button.component';
import ECommerceZTM from '../projects/e-commerce-ZTM/e-commerce-ZTM.component';
import TpPortfolio from '../projects/tp-portfolio/tp-portfolio.component';
//animations
import { motion } from 'framer-motion';
import { projectsContainer, fadeInOut } from '../../animations/framer-animations';
import { useScroll } from '../../animations/useScroll';

const ProjectsSection = () => {

    const [showZtmProject, setZtmProject] = useState(false);
    const [showPortfolioProject, setPortfolioProject] = useState(false);
    const [element, controls] = useScroll();

    return (
        <section className='projects-section'>
            <motion.h2 variants={fadeInOut} initial="hidden" animate={controls} ref={element}><span>P</span>rojects</motion.h2>
            <motion.p variants={fadeInOut} initial="hidden" animate={controls} ref={element}>These are my favorite projects I've worked on for the past year. Have a look around!</motion.p>
            <motion.div className='grid-container' variants={projectsContainer} initial="hidden" animate={controls} ref={element}>
                <motion.div className='e-commerce-ztm' variants={fadeInOut}>
                    <CustomButton text='View Project' eye onClick={() => setZtmProject(!showZtmProject)}/>
                </motion.div>
                <motion.div className='tp-portfolio' variants={fadeInOut}>
                    <CustomButton text='View Project' eye onClick={() => setPortfolioProject(!showPortfolioProject)}/>
                </motion.div>
            </motion.div>

            <ECommerceZTM showZtmProject={showZtmProject} setZtmProject={setZtmProject}/>
            <TpPortfolio showPortfolioProject={showPortfolioProject} setPortfolioProject={setPortfolioProject}/>

            <SectionWave />
        </section>
    )
}

export default ProjectsSection;