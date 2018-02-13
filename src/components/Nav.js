import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
render() {
  return(
    <ul className='nav'>
      <li className='nav-about'>
        <NavLink className='link' activeClassName='active' to='/about'>About</NavLink>
      </li>
      <li className='nav-projects'>
        <NavLink activeClassName='active' to='/projects'>Projects</NavLink>
      </li>
      <li className='nav-home'>
        <NavLink activeClassName='active' exact to='/'>Home</NavLink>
      </li>
    </ul>
  );
}}

export default Nav;
