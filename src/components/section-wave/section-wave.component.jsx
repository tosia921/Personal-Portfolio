import React from 'react';
import './section-wave.styles.scss'; 

const SectionWave = ({secondary}) => {


        return (
        <div class="custom-shape-divider-bottom-1612993316" style={secondary ? {fill: '#2a2e47'} : {fill: '#282d4e'}}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
        )
}

export default SectionWave;

<svg  viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M 0,400 C 0,400 0,200 0,200 C 202.40000000000003,168.53333333333333 404.80000000000007,137.06666666666666 561,149 C 717.1999999999999,160.93333333333334 827.2,216.26666666666665 966,232 C 1104.8,247.73333333333335 1272.4,223.86666666666667 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900efff" class="shape-fill"></path></svg>