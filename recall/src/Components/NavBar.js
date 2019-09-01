import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="NavBar">
        <NavLink exact to='/'>Landing Page</NavLink>
        <hr />
        <NavLink exact to='/sort'>Sort Page</NavLink>
        <hr />
        <NavLink exact to='/items'> Item Builds </NavLink>
      </Navbar>
    )
  }
}
