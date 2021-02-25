import React, { useState } from 'react';
//styles
import './projects-section.styles.scss';
//wave svg
import SectionWave from '../section-wave/section-wave.component';
//components
import CustomButton from '../custom-button/custom-button.component';
import ECommerceZTM from '../projects/e-commerce-ZTM/e-commerce-ZTM.component';
import TpPortfolio from '../projects/tp-portfolio/tp-portfolio.component';

const ProjectsSection = () => {

    const [showZtmProject, setZtmProject] = useState(false);
    const [showPortfolioProject, setPortfolioProject] = useState(false);

    return (
        <section className='projects-section'>
            <h2><span>P</span>rojects</h2>
            <p>These are my favorite projects I've worked on for the past year. Have a look around!</p>
            <div className='grid-container'>
                <div className='e-commerce-ztm'>
                    <CustomButton text='View Project' eye onClick={() => setZtmProject(!showZtmProject)}/>
                </div>
                <div className='tp-portfolio'>
                    <CustomButton text='View Project' eye onClick={() => setPortfolioProject(!showPortfolioProject)}/>
                </div>
            </div>

            <ECommerceZTM showZtmProject={showZtmProject} setZtmProject={setZtmProject}/>
            <TpPortfolio showPortfolioProject={showPortfolioProject} setPortfolioProject={setPortfolioProject}/>

            <SectionWave />
        </section>
    )
}

export default ProjectsSection;