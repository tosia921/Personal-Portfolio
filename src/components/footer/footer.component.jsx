import React from "react";
import './footer.styles.scss';
import { NavLink } from 'react-router-dom';

const Footer = ({backgroundSecondary}) => (
  <div className={`${backgroundSecondary ? 'footer background-secondary' : 'footer'}`}>
    <div className='line-throught'/>
    <ul className='footer-menu-list'>
      <NavLink to='/' className='footer-link' activeStyle={{color: "#fec576"}} exact>Home</NavLink>
      <NavLink to='/aboutme' className='footer-link' activeStyle={{color: "#fec576"}} exact>About Me</NavLink>
      <NavLink to='/projects' className='footer-link' activeStyle={{color: "#fec576"}} exact>Projects</NavLink>
      <NavLink to='/contact' className='footer-link' activeStyle={{color: "#fec576"}} exact>Contact</NavLink>
    </ul>
    <div className='line-throught margin-top'/>
  </div>
);

export default Footer;