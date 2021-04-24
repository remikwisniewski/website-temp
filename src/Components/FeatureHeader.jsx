import React from 'react';

function FeatureHeader(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p> {props.text} </p>
                <p> <a href="https://devpost.com/remikwisniewski">{props.text2}</a> </p>
            </div>
        </div>
    )
}

export default FeatureHeader;
