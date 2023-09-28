import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to="">Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="#home">Products</Link>
            <Link to="#link">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar