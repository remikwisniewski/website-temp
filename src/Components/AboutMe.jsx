import React from 'react';

function AboutMe(props) {
    return (
        <div id='about'>

            <div className= 'about-text'> {/* BIO FOR contact page */}
                <h2> {props.title}
                </h2>
                <p>
                    Email: rwisni736@gmail.com
                </p>
                <p>
                    Github: <a href="https://github.com/remikwisniewski">@remikwisniewski </a>
                </p>
                <p>
                    LinkedIn: <a href="http://linkedin.com/in/remi-wisniewski-56a9031aa">linkedin.com/in/remi-wisniewski-56a9031aa.</a>
                </p>
                

            </div>

        </div>
    )
}

export default AboutMe;
