import React from 'react';
//styles
import './tp-portfolio.styles.scss';
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

const TpPortfolio = ({showPortfolioProject, setPortfolioProject}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showPortfolioProject && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-portfolio' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-portfolio'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setPortfolioProject(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>P</span>ersonal Portfolio</h2>
                    <div className='screenshot-mobile-portfolio'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html'} />
                        <TechNameBox text={'css'} />
                        <TechNameBox text={'react'} />
                        <TechNameBox text={'React Router Dom'} />
                        <TechNameBox text={'Framer Motion'} />
                    </div>
                    <p className='project-description'>This website was both designed and developed by myself to showcase my web development skills. Using technologies like react for performance and framer motion for that extra "wow" effects I wanted it to be a gateway between me and potential employers.</p>
                    <div className='project-details-buttons'>
                            <CustomButton eye isLink LinkTo='/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/Personal-Portfolio' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default TpPortfolio;