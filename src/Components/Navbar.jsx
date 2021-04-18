import React, {useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {

    const [nav,setnav] = useState(false);

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
            <a href="#" className='logo'>
                <img src={logo} alt = ''/>
            </a>
            <input type='checkbox' className= 'menu-btn' id='menu-btn'/>
            <label className='menu-icon' for= 'menu-btn'>
                <span className= 'nav-icon'></span>
            </label>
            <ul className= 'menu'>
                <li><a href='#'>Home</a></li>
                {/* scroll down options when clicked on*/}
                <li><a href='#'>Features</a></li> {/* FIX LINKS (HREF='#' */}
                <li><a href='#'>About</a></li>
                <li><a href='#'>UI SS</a></li>
                <li><a href='#'>Download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
