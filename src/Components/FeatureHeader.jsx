import React from 'react';

function FeatureHeader(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p> random text hahahaahahasahahhahhahaah </p>
            </div>
        </div>
    )
}

export default FeatureHeader;
