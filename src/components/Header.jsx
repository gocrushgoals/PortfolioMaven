import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/App.css';

const Header = () => (
  <header>
    <h3>Kristi's Portfolio</h3>
    <nav>
      <ul>
      <li><NavLink to="/" exact="true">Home</NavLink></li>
        <li><NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        <li><NavLink to="/resume" activeclassname="active">Resume</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
