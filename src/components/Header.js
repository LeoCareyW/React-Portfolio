import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-item">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      </div>
      <div className="header-item">
        <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
      </div>
      <div className="header-item">
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
      </div>
    </div>
  </header>
)

export default Header


