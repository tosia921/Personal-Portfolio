import React from 'react';
//styles
import './header.styles.scss';
//react router dom
import { NavLink } from 'react-router-dom';

const Header = ({backgroundSecondary, backgroundPrimary}) => {
    return (
        <nav className={`${backgroundPrimary ? 'nav nav-background-primary' : 'nav'} ${backgroundSecondary ? 'nav nav-background-secondary' : 'nav'}`}>
            <div className='logo'>Portfo<span>lio.</span></div>
            <menu className='menu'>
                <ul>
                    <NavLink to='/' className='header-link' activeStyle={{color: "#fec576"}} exact>Home</NavLink>
                    <NavLink to='/aboutme' className='header-link' activeStyle={{color: "#fec576"}} exact>About Me</NavLink>
                    <NavLink to='/projects' className='header-link' activeStyle={{color: "#fec576"}} exact>Projects</NavLink>
                    <NavLink to='/contact' className='header-link' activeStyle={{color: "#fec576"}} exact>Contact</NavLink>
                </ul>
            </menu>
        </nav>
    )
}

export default Header;

