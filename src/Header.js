import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './Login'
import Logout from './Logout'
import About from './About'
import './theme/Header.css'
import Logo from './theme/logo.png'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><a href = "/"><img className = 'logoHeaderImg'src = {Logo} alt = 'logo'/></a></Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="./User" className="nav-link">Dashboard</Link></NavItem>
        <NavItem><Link to="./About" className="nav-link">About</Link></NavItem>

<Login />
        <Logout />

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
