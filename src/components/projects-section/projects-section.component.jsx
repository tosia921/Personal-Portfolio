import React, { useState } from 'react';
//styles
import './projects-section.styles.scss';
//wave svg
import SectionWave from '../section-wave/section-wave.component';
//components
import CustomButton from '../custom-button/custom-button.component';
import ECommerceZTM from '../projects/e-commerce-ZTM/e-commerce-ZTM.component';
import LekawaPhotography from '../projects/lekawa-photography/lekawa-photography.component';
import TodoApp from '../projects/toto-app/todo-app.component';
import GithubJobsApi from '../projects/github-jobs-api/github-jobs-api.component'
import Photosnap from '../projects/Photosnap-website/photosnap';
//animations
import { motion } from 'framer-motion';
import { projectsContainer, fadeInOut } from '../../animations/framer-animations';
import { useScroll } from '../../animations/useScroll';

const ProjectsSection = () => {

    const [showZtmProject, setZtmProject] = useState(false);
    const [showPhotosnapProject, setPhotosnapProject] = useState(false);
    const [showLekawaPhotography, setLekawaPhotography] = useState(false);
    const [showTodoProject, setTodoProject] = useState(false);
    const [showGitHubJobsApi, setGitHubJobsApi] = useState(false);
    const [element, controls] = useScroll();

    return (
        <section className='projects-section'>
            <motion.h2 variants={fadeInOut} initial="hidden" animate={controls} ref={element}><span>P</span>rojects</motion.h2>
            <motion.p variants={fadeInOut} initial="hidden" animate={controls} ref={element}>These are my favorite projects I've worked on for the past year. Have a look around!</motion.p>
            <motion.div className='grid-container' variants={projectsContainer} initial="hidden" animate={controls} ref={element}>
                <motion.div className='lekawa' variants={fadeInOut}>
                    <p className='preview-title'>Photographer Website</p>
                    <CustomButton text='View Project' eye onClick={() => setLekawaPhotography(!showLekawaPhotography)}/>
                </motion.div>
                <motion.div className='photosnap' variants={fadeInOut}>
                    <p className='preview-title'>PhotoSnap - Gatsby Website</p>
                    <CustomButton text='View Project' eye onClick={() => setPhotosnapProject(!showPhotosnapProject)}/>
                </motion.div>
                <motion.div className='todo-app' variants={fadeInOut}>
                    <p className='preview-title'>ToDo App - React, Redux Toolkit</p>
                    <CustomButton text='View Project' eye onClick={() => setTodoProject(!showTodoProject)}/>
                </motion.div>
                <motion.div className='github-jobs-api' variants={fadeInOut}>
                    <p className='preview-title'>GitHub Jobs App</p>
                    <CustomButton text='View Project' eye onClick={() => setGitHubJobsApi(!showGitHubJobsApi)}/>
                </motion.div>
                <motion.div className='e-commerce-ztm' variants={fadeInOut}>
                    <p className='preview-title'>Clommerce - React Ecommerce</p>
                    <CustomButton text='View Project' eye onClick={() => setZtmProject(!showZtmProject)}/>
                </motion.div>
            </motion.div>

            <ECommerceZTM showZtmProject={showZtmProject} setZtmProject={setZtmProject}/>
            <Photosnap showPhotosnapProject={showPhotosnapProject} setPhotosnapProject={setPhotosnapProject}/>
            <TodoApp showTodoProject={showTodoProject} setTodoProject={setTodoProject}/>
            <GithubJobsApi showGitHubJobsApi={showGitHubJobsApi} setGitHubJobsApi={setGitHubJobsApi}/>
            <LekawaPhotography showLekawaPhotography={showLekawaPhotography} setLekawaPhotography={setLekawaPhotography}/>

            <SectionWave />
        </section>
    )
}

export default ProjectsSection;