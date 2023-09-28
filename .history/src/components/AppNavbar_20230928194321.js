import React, { useEffect } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppNavbar() {
useEffect(()=>{

},[])
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Products
            </Link>
            <Link className="nav-link" to="/cart">
              Cart -{Cart}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
