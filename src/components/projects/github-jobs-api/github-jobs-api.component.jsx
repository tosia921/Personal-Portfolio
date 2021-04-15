import React from 'react';
//styles
import './github-jobs-api.styles.scss'

//svg
import xIcon from '../../../assets/xIcon.svg';
//framer-motion
import { motion, AnimatePresence } from 'framer-motion';
//custom components
import TechNameBox from '../../tech-name-box/tech-name-box.component';
import CustomButton from '../../custom-button/custom-button.component';

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}
const projectContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {delay: 0.5}
    }
    
}

const GithubJobsApi = ({showGitHubJobsApi, setGitHubJobsApi}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showGitHubJobsApi && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-git' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setGitHubJobsApi(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>G</span>itHub Jobs App</h2>
                    <div className='screenshot-mobile'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html5'} />
                        <TechNameBox text={'styled components'} />
                        <TechNameBox text={'react'} />
                        <TechNameBox text={'redux toolkit'} />
                        <TechNameBox text={'framer motion'} />
                        <TechNameBox text={'react router dom'} />
                        <TechNameBox text={'react markdown'} />
                    </div>
                    <p className='project-description'>This is a Github Jobs Api Application design by Frontendmentor.io as a challenge and completly developed by myself. It filters and displays all available Github jobs and navigates to jobs description page when clicking on each job title.</p>
                    <div className='project-details-buttons'>
                            <CustomButton eye isLink LinkTo='https://unruffled-joliot-4a7262.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/github-jobs-app' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default GithubJobsApi;