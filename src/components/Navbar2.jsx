import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchNav from './searchNav.jsx'

import './Navbar.css';

function NavbarComponent() {
  const [state, setState] = useState({
    searchOpen: false,
  });

  const toggleDropdown = () => {
    setState(prev => ({
      ...prev,
      searchOpen: !prev.searchOpen
    }))
  }
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="title-font" href="#home">Project.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#link">Criar projeto</Nav.Link>
            <Nav.Link onClick={toggleDropdown} href="#link">Pesquisar</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home" >Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <SearchNav toggled={state.searchOpen}/>
    </>
  );
}

export default NavbarComponent;