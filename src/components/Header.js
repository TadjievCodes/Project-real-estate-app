import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
      <Nav className="justify-content-center align-items-center">
        <li>
          <img
          src={logo}
          width= "150"
          height ="auto"
          alt="logo"
          />
        </li>
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/listings'} className="nav-link">Realtors</Link></li>
        <li><Link to={'/login'} className="nav-link">Login</Link></li>
        <li><Link to={'/search'} className="nav-link">Property Finder</Link></li>
        <li><Link to={'/map'} className="nav-link">Map</Link></li>
       {/* <li><Link to={'/details'} className="nav-link">Details</Link></li>  */}
      </Nav>
    </Navbar>
    );
  }
}

export default Header;