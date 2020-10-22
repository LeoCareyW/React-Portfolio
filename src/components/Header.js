import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/projects" activeClassName="is-active">Projects</NavLink>
    <NavLink to="/about" activeClassName="is-active">About</NavLink>
  </header>
)

export default Header
