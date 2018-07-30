import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Image from './../images/wolf-rayet-logo.jpg'

class Header extends Component {
    render() {
      return (
        <div>
          <header className="header">
            <NavLink to="/">
              <img className="header__logo" src={Image} alt="Wolf Rayet Logo"/>
            </NavLink>
            <nav className="nav">
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/stockists">Stockists</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </header>
        </div>
      )
    }
}

export default Header;
