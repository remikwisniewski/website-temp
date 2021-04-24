import React, {useState } from 'react';

function Navbar() {

    const [nav,setnav] = useState(false);

    {/* page scrolling */}
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground); {/* EVENT FUNCTION */}

    return (
        <nav className={nav ? "nav active" : "nav"}> 
            <input type='checkbox' className= 'menu-btn' id='menu-btn'/>
            <label className='menu-icon' for= 'menu-btn'>
                <span className= 'nav-icon'></span>
            </label>
            <ul className= 'menu'>
                <li><a href='#'>Home</a></li>
                {/* scroll down options when clicked on*/}
                <li><a href='#features'>Portfolio</a></li> {/* FIX LINKS (HREF='#' */}
                <li><a href='#about'>Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
