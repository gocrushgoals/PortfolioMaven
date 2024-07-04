import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/App.css';

const Header = () => (
  <header>
    <h3>Kristi's Portfolio</h3>
    <nav>
      <ul>
        <li><NavLink exact="true" to="/" activeClassName="active">About Me</NavLink></li>
        <li><NavLink exact to="/" activeClassName="active">About Me</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
