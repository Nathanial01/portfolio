import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbaar.css'; 

function TopNav() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <span className="navbar-brand-text">My Portfolio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="ml-auto navbar-links">
              <Nav.Link href="#about" className="nav-link-custom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
              <Nav.Link href="#projects" className="nav-link-custom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
              <Nav.Link href="#cryoX" className="nav-link-custom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
              <Nav.Link href="#ongoing" className="nav-link-custom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
              <Nav.Link href="#hobbies" className="nav-link-custom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Nav.Link>
            </Nav>

            <Form inline className="navbar-search-form">
              <FormControl 
                type="text" 
                placeholder="⌘ Search" 
                className="navbar-search-field" 
              /> 
           
              <Nav.Link href="#profile" className="navbar-profile-icon">
                <FontAwesomeIcon icon={faUserCircle} size="2xl" />
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default TopNav;
