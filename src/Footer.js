import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './theme/Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <Navbar className = 'footerNav' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
