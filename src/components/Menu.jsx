import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Menu() {
  return (
    <div className="menu">
      <Navbar expand="lg" variant="light" bg="light" sticky="top">
        <Container>
          <Nav>
            <Nav.Item>
              <Nav.Link href="#carte">Carte</Nav.Link>
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
            <Zoom>
              <Image id="carte" className="img-fluid" src="./img/menu/la-carte_i283726789573158798._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col>
            <Zoom>
              <Image id="vins" className="img-fluid" src="./img/menu/vins1_i283726789586882369._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>
        <Row>
          <Col>
            <Zoom>
              <Image className="img-fluid" src="./img/menu/vins2_i283726789573158456._szw1280h1280_.jpg" />
            </Zoom>
          </Col>
        </Row>        
      </Container>
    </div>
  );
}

export default Menu;