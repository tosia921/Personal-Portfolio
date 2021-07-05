import React from "react";
import './footer.styles.scss';
import { NavLink } from 'react-router-dom';

const Footer = ({backgroundSecondary}) => (
  <div className={`${backgroundSecondary ? 'footer background-secondary' : 'footer'}`}>
    <div className='top'>
      <ul className='footer-menu-list'>
        <NavLink to='/' className='footer-link' activeStyle={{color: "#fec576"}} exact>Home</NavLink>
        <NavLink to='/aboutme' className='footer-link' activeStyle={{color: "#fec576"}} exact>About Me</NavLink>
        <NavLink to='/projects' className='footer-link' activeStyle={{color: "#fec576"}} exact>Projects</NavLink>
        <NavLink to='/contact' className='footer-link' activeStyle={{color: "#fec576"}} exact>Contact</NavLink>
      </ul>
      <div className='contact-details'>
        <p>Tomasz Posiadala</p>
        <p>Kirkcaldy, Fife</p>
        <p>tomaszposiadala@gmail.com</p>
        <p>0 7476 88 33 79</p>
      </div>
    </div>
    <div className='bottom'>
      <p>Copyright ©2021 Tomasz Posiadala. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;