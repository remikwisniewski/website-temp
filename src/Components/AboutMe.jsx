import React from 'react';

function AboutMe(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt= ''/> {/* img link */}
            </div>

            <div className= 'about-text'> {/* BIO FOR ABOUT PAGE */}
                <h2> {props.title}
                </h2>
                <p>
                    Random about me text....... HAHAHH
                    fill this in later :D
                </p>
                <button> {props.button}</button>

            </div>

        </div>
    )
}

export default AboutMe;
