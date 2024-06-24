import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/wins" activeClassName="active">Wins</NavLink></li>
        <li><NavLink to="/losses" activeClassName="active">Losses</NavLink></li>
        <li><NavLink to="/amendments" activeClassName="active">Amendments</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
