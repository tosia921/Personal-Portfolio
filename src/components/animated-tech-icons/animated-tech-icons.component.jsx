import React from 'react';
import './animated-tech-icons.styles.scss';
//svg's
import ReactIcon from '../../assets/reactLogo.svg';
import NpmIcon from '../../assets/npm.svg';
import GatsbyIcon from '../../assets/gatsbyLogo.svg';
import GitHubIcon from '../../assets/githubLogo.svg';
import GitIcon from '../../assets/gitLogo.svg';
import JavascriptIcon from '../../assets/javascriptLogo.svg';
import SassIcon from '../../assets/SassLogo.svg';
import Css3Icon from '../../assets/Css3Icon.svg';
import Html5Icon from '../../assets/Html5Icon.svg';
import NextJSLogo from '../../assets/next-js.svg';

//animations
import { motion } from 'framer-motion';
import { techIcons } from '../../animations/framer-animations';

import CircleThick from '../../assets/Circle.svg';

export const AnimatedReactIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={ReactIcon} alt='React Logo' className='icon-inside' />
            <p>REACT JS</p>
        </motion.div>
    )
}

export const AnimatedNpmIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={NpmIcon} alt='Npm Logo' className='icon-inside'/>
            <p>NPM</p>
        </motion.div>
    )
}
export const AnimatedNextIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={NextJSLogo} alt='React Logo' className='icon-inside'/>
            <p>Next JS</p>
        </motion.div>
    )
}

export const AnimatedGatsbyIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={GatsbyIcon} alt='React Logo' className='icon-inside'/>
            <p>Gatsby JS</p>
        </motion.div>
    )
}

export const AnimatedGitHubIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={GitHubIcon} alt='React Logo' className='icon-inside'/>
            <p>GitHub</p>
        </motion.div>
    )
}

export const AnimatedGitIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={GitIcon} alt='React Logo' className='icon-inside'/>
            <p>Git</p>
        </motion.div>
    )
}

export const AnimatedJavaScriptIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={JavascriptIcon} alt='React Logo' className='icon-inside'/>
            <p>JavaScript</p>
        </motion.div>
    )
}

export const AnimatedSassIcon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={SassIcon} alt='React Logo' className='icon-inside'/>
            <p>Sass</p>
        </motion.div>
    )
}

export const AnimatedCss3Icon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img  src={Css3Icon} alt='React Logo' className='icon-inside'/>
            <p>Css 3</p>
        </motion.div>
    )
}

export const AnimatedHtml5Icon = () => {
    return (
        <motion.div className='circle-container' variants={techIcons}>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={Html5Icon} alt='React Logo' className='icon-inside'/>
            <p>Html 5</p>
        </motion.div>
    )
}



