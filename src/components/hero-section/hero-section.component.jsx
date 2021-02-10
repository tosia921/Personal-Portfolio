import React from 'react';
//styles
import './hero-section.styles.scss'
//components
import Header from '../header/header.component';
import CustomButton from '../custom-button/custom-button.component';
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
            <div class="custom-shape-divider-bottom-1612993316">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <Path1 className='path-1'/>
            <Path2 className='path-2'/>
        </section>
    )
}

export default HeroSection;