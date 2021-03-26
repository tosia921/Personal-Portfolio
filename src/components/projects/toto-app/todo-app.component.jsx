import React from 'react';
//styles
import './todo-app.styles.scss';
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

const TodoApp = ({ showTodoProject, setTodoProject }) => {
    return (
        <AnimatePresence exitBeforeEnter>
        {showTodoProject && 
        <motion.div className='backdrop' variants={backdrop} initial="hidden" animate="visible">
            <motion.div className='project-todo' variants={projectContainer} initial="hidden" animate="visible" exit="hidden">
                <div className='screenshot-todo'></div>
                <div className='details'>
                    <div className='x-button' onClick={() => setTodoProject(false)}>
                        <img src={xIcon} alt='exit icon'/>
                    </div>
                    <h2 className='project-title'><span>T</span>oDo App - React, Redux Toolkit</h2>
                    <div className='screenshot-mobile-portfolio'></div>
                    <div className='tech-stack'>
                        <TechNameBox text={'html5'} />
                        <TechNameBox text={'Styled Components'} />
                        <TechNameBox text={'React'} />
                        <TechNameBox text={'Redux Toolkit'} />
                        <TechNameBox text={'Redux Persist'} />
                    </div>
                    <p className='project-description'>This one is a small React Redux application to practice new Redux Toolkit way of setting up global state in React Applications. Really like the aproach to reduce Redux boilerplate and keep all the logic - reducers, actions, selectors in one file thanks to 'CreateSlice' method. To learn more about this project go to github repository ReadMe file!</p>
                    <div className='project-details-buttons'>
                        <CustomButton eye isLink LinkTo='https://605c95298ab4281cbf24ea5e--inspiring-heisenberg-41fe40.netlify.app/' text={'demo'}/>
                        <CustomButton code isLink LinkTo='https://github.com/tosia921/todo-react-reduxtoolkit' text={'code'}/>
                    </div>
                </div>
                
            </motion.div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default TodoApp
