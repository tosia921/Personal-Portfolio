import React from 'react';
//styles
import './header.styles.scss';
//react router dom
import { NavLink } from 'react-router-dom';

const Header = ({backgroundSecondary}) => {
    return (
        <nav className={`${backgroundSecondary ? 'nav nav-background-secondary' : 'nav'}`}>
            <div className='logo'>Portfo<span>lio.</span></div>
            <menu className='menu'>
                <ul>
                    <NavLink to='/' className='header-link' activeStyle={{color: "#fec576"}} exact>Home</NavLink>
                    <NavLink to='/' className='header-link'>About Me</NavLink>
                    <NavLink to='/projects' className='header-link' activeStyle={{color: "#fec576"}} exact>Projects</NavLink>
                    <NavLink to='/' className='header-link'>Contact</NavLink>
                </ul>
            </menu>
        </nav>
    )
}

export default Header;

