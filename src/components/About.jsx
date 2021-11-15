import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about">
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

export default About;