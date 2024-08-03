// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="sd-navbar">
      <Navbar.Brand href="#home">
        <h1 className="sd-logo">SD</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link className="mx-5" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-5" href="#about">About</Nav.Link>
          <Nav.Link className="mx-5" href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;