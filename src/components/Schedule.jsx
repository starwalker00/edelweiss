import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Schedule() {
  return (
    <div className="schedule">
      <Container>
        <Row>
          <Col>lundi</Col>
          <Col>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>mardi</Col>
          <Col>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>mercredi</Col>
          <Col>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>jeudi</Col>
          <Col>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>vendredi</Col>
          <Col>12h-13h30 | 19h30-22h30</Col>
        </Row>
        <Row>
          <Col>samedi</Col>
          <Col>19h30-22h30</Col>
        </Row>
        <Row>
          <Col>dimanche</Col>
          <Col>fermé</Col>
        </Row>        
      </Container>
    </div>
  );
}

export default Schedule;