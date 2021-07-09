import React from 'react';
//styles
import './woodjoiners.styles.scss';
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

const Woodjoiners = ({ showWoodjoiners, setWoodjoiners }) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showWoodjoiners && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='woodjoiners' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-woodjoiners'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setWoodjoiners(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>W</span>ood<span>J</span>oiners</h2>
                    <div className='screenshot-mobile-portfolio'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html5'} />
                        <TechNameBox text={'Styled Components'} />
                        <TechNameBox text={'Gatsby JS'} />
                        <TechNameBox text={'Sanity CMS'} />
                        <TechNameBox text={'GraphQL'} />
                    </div>
                    <p className='project-description'>This is a website designed and developed for a wood renovation business. Designed with Adobe XD, developed using Gatsby JS and Sanity CMS.</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://woodjoiners.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/Wood-Joiners' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default Woodjoiners