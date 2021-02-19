import React from 'react'
import './hero-section-wave-animation.styles.scss';

export const HeroSectionWaveAnimation = ({secondary,}) => {
    return (
        secondary ?
        (<svg className='wave-svg-hero-section-secondary' xmlns="http://www.w3.org/2000/svg" width="1268.156" height="700.388" viewBox="0 0 1268.156 700.388"><path d="M-268.806,472.856C-196.855,286.314,77.8,187.8,431.967,196.25c439.08,6.335,567.709-285.684,557.049-421.593" transform="translate(273.471 225.733)" fill="none" stroke="#fec576" stroke-width="10"/></svg>)
        :
        (<svg className='wave-svg-hero-section-primary' xmlns="http://www.w3.org/2000/svg" width="3134.076" height="1207.213" viewBox="0 0 3134.076 1207.213"><path d="M-383.742,829.028C-119.92,569.859,245.169,778.4,591.6,799.714,983.34,829.028,1123.1,736.523,1199.2,573.2c46.161-99.077,69.833-352.614,175.882-493C1654.889-290.221,2624.905-66.371,2742.16-372.832" transform="translate(387.246 374.619)" fill="none" stroke="#fec576" stroke-width="12"/></svg>)
    )
}

export const HeroSectionWaveAnimationMobile = () => {
    return (
        <svg className='wave-svg-hero-section-mobile' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416.265 194.391"><path d="M2396.3-7.3c67.518-1.216,41.583-96.738,195.513-100.348,129.191-4.263,183.84-94.572,220.316-88.8" transform="translate(-2396.254 199.193)" fill="none" stroke="#fec576" stroke-width="2"/></svg>
    )
}


    



