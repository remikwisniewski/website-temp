import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id = 'main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Remigiusz Wisniewski</span> University Of Illinois at Chicago</h1> {/* name */}
                <p className='details' > I am looking for software engineering jobs.</p> {/* bio */}
                <a href="#" className='cv-btn'>Download Link</a>    {/* button on front page */}
            </div>
        </div>
    )
}

export default Header;
