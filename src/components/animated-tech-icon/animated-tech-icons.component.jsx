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

import CircleThick from '../../assets/Circle.svg'

export const AnimatedReactIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={ReactIcon} alt='React Logo' className='icon-inside' />
        </div>
    )
}

export const AnimatedNpmIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={NpmIcon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedGatsbyIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={GatsbyIcon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedGitHubIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={GitHubIcon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedGitIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={GitIcon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedJavaScriptIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={JavascriptIcon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedSassIcon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={SassIcon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedCss3Icon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img  src={Css3Icon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}

export const AnimatedHtml5Icon = () => {
    return (
        <div className='circle-container'>
            <img src={CircleThick} alt='Animated Cicle' className='circle'/>
            <img src={Html5Icon} alt='React Logo' className='icon-inside'/>
        </div>
    )
}



