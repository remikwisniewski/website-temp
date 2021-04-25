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
                <p> {props.text3}</p>
                <p> {props.text4}</p>
                <p> </p>
                <p> {props.text5}</p>
                <h3> <a href="https://github.com/remikwisniewski">{props.gitt}</a> < /h3>
            </div>
        </div>
    )
}

export default FeatureHeader;
