import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Menu() {
  return (
    <div className="menu">
      <Navbar className="navbar-expand" sticky="top">
        <Container>
          <Nav className="m-auto">
            <Nav.Item>
              <Nav.Link href="#carte">Carte</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#salades">Salades</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#vins">Vins</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container className="text-center">
        <Row>
          <Col>
            <Zoom overlayBgColorEnd="rgba(144, 164, 76, 0.75)" overlayBgColorStart="rgba(144, 164, 76, 0)">
              <Image id="carte" className="menu-img img-fluid" src="./img/menu/la-carte_i283726789573158798._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col>
            <Zoom overlayBgColorEnd="rgba(144, 164, 76, 0.75)" overlayBgColorStart="rgba(144, 164, 76, 0)">
              <Image id="salades" className="menu-img img-fluid" src="./img/menu/salades_i283726789586962023._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col>
            <Zoom overlayBgColorEnd="rgba(144, 164, 76, 0.75)" overlayBgColorStart="rgba(144, 164, 76, 0)">
              <Image id="vins" className="menu-img img-fluid" src="./img/menu/vins1_i283726789586882369._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col>
            <Zoom overlayBgColorEnd="rgba(144, 164, 76, 0.75)" overlayBgColorStart="rgba(144, 164, 76, 0)">
              <Image className="menu-img img-fluid" src="./img/menu/vins2_i283726789573158456._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Menu;