import React from 'react';
//styles
import './e-commerce-ZTM.styles.scss';
//router dom
import { Link } from 'react-router-dom';

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
                    <h2 className='project-title'><span>C</span>lommerce</h2>
                    <div className='tech-stack'>
                        <TechNameBox text={'html'} />
                        <TechNameBox text={'css'} />
                        <TechNameBox text={'react'} />
                        <TechNameBox text={'redux'} />
                        <TechNameBox text={'redux thunk'} />
                        <TechNameBox text={'redux persist'} />
                        <TechNameBox text={'firebase'} />
                    </div>
                    <p className='project-description'>This is a Clothing e-commerce project, that features real world e-commerce platform functionalities like authentication, cart, adding and removing items, shop page where we display products and also check out page with implemented card payments with Stripe API. This website was created following extensive React course by Zero To Mastery Academy course. </p>
                    <div className='project-details-buttons'>
                            <CustomButton eye isLink LinkTo='https://clommerce.herokuapp.com' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/e-commerce-ZTM-Course' text={'code'}/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default ECommerceZTM;