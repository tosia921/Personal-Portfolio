import React from 'react';
//styles
import './lekawa-photography.styles.scss';
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

const LekawaPhotography = ({ showLekawaPhotography, setLekawaPhotography }) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showLekawaPhotography && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='lekawa-photography' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-lekawa-photography'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setLekawaPhotography(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>L</span>ekawa <span>P</span>hotography</h2>
                    <div className='screenshot-mobile-portfolio'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html5'} />
                        <TechNameBox text={'Styled Components'} />
                        <TechNameBox text={'Next Js'} />
                        <TechNameBox text={'Strapi CMS'} />
                        <TechNameBox text={'Apollo/Client'} />
                        <TechNameBox text={'GraphQL'} />
                        <TechNameBox text={'react hook form'} />
                    </div>
                    <p className='project-description'>This is a freelance project designed and developed by myself. Tomasz Lekawa is a photographer based in Nottingham and I had a great pleasure to work on his new website with a focus on showcasing his past and recent work aswell as bring new clients to his business.</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://www.lekawa-photography.co.uk/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/Lekawa-Photography-Portfolio' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default LekawaPhotography