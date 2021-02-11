import React from 'react';
//styles
import './hero-section.styles.scss'
//components
import Header from '../header/header.component';
import CustomButton from '../custom-button/custom-button.component';
import SectionWave from '../section-wave/section-wave.component';
//animated svg paths
import { ReactComponent as Path1 } from '../../assets/PATH FIRST.svg';
import { ReactComponent as Path2 } from '../../assets/PATH SECOND.svg';


const HeroSection = () => {
    return (
        <section className='hero-section'>
            <Header/>
            <div className='content-container'>
                <div className='content'>
                    <p>hello, I'm</p>
                    <h1>Tomasz</h1>
                    <h1 className='big'>POSIADALA</h1>
                    <p>Front End Developer</p>
                    <CustomButton text='VIEW PROJECTS' />
                </div>
                <div className='my-photo'/>
            </div>
            <SectionWave />
            <Path1 className='path-1'/>
            <Path2 className='path-2'/>
        </section>
    )
}

export default HeroSection;