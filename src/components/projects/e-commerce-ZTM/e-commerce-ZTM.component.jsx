import React from 'react';
//styles
import './e-commerce-ZTM.styles.scss';
//svg
import xIcon from '../../../assets/xIcon.svg';
//framer-motion
import { motion, AnimatePresence } from 'framer-motion';

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

const ECommerceZTM = ({showZtmProject, setZtmProject}) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showZtmProject && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-ztm' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setZtmProject(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default ECommerceZTM;