import React from 'react';
import FeatureHeader from './FeatureHeader';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

{/* importing rest of images ^ */}

function Feature() {
    return (
        <div id='features'>
            <div className = 'a-container'>
                <FeatureHeader image={featureimage} title='Portfolio Projects'/> {/* fix in navbar*/}
                <FeatureHeader image={featureimage1} title='Skills'/>
                <FeatureHeader image={featureimage2} title='Classes Taken'/>
                
            </div>
            
        </div>
    )
}

export default Feature;
