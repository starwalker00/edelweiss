import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Menu() {
  return (
    <div className="menu">
      <Container>
        <Row>
          <Col>lundi</Col>
          <Col>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>dimanche</Col>
          <Col>fermé</Col>
        </Row>        
      </Container>
    </div>
  );
}

export default Menu;