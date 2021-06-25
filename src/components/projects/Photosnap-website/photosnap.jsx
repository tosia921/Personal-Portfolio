import React from 'react';
//styles
import './photosnap.styles.scss';
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

const Photosnap = ({ showPhotosnapProject, setPhotosnapProject }) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showPhotosnapProject && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-photosnap' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-photosnap'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setPhotosnapProject(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>P</span>hoto<span>S</span>nap - Gatsby Website</h2>
                    <div className='screenshot-mobile-photosnap'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'Html5'} />
                        <TechNameBox text={'Styled Components'} />
                        <TechNameBox text={'React'} />s
                        <TechNameBox text={'Gatsby'} />
                        <TechNameBox text={'Framer Motion'} />
                    </div>
                    <p className='project-description'>This project is a frontendmentor.io challenge. TO build it I decided to use Gatsby.js for it's built in image optimazation and blazing fast performance. It was also great opportunity to test some new Gatsby v3 features.</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://modest-payne-c53e87.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/Photosnap-multi-page-website' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default Photosnap