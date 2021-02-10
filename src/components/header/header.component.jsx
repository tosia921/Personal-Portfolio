import React from 'react';
//styles
import './header.styles.scss';

const Header = () => {
    return (
        <nav className='nav'>
            <div className='logo'>Portfo<span>lio.</span></div>
            <menu className='menu'>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </menu>
        </nav>
    )
}

export default Header;