import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id = 'main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Remigiusz Wisniewski (Remik)</span> University Of Illinois at Chicago</h1> {/* name */}
                <p className='details' > Hi! I'm Remik. I am a third year Computer Science student at UIC. I am looking
                for software engineering internships over summer.</p> {/* bio */}
            </div>
        </div>
    )
}

export default Header;
