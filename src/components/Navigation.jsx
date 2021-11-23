import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

function Navigation(props) {
  const { location } = props;
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="sm" bg="dark">
        <Container fluid>
          <Navbar.Brand href="/">L'EDELWEISS</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/schedule">Horaires</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">L'EDELWEISS</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav activeKey={location.pathname} className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                <Nav.Link href="/schedule">Horaires</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <hr />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div >
  );
}

export default withRouter(Navigation);