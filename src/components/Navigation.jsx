import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

function Navigation(props) {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="sm" bg="dark">
        <Container fluid>
          <Navbar.Brand href="/">EDELWEISS</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            className="bg-dark"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(Navigation);