import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Schedule() {
  return (
    <div className="schedule">
      <Container className="">
        <Row>
          <Col>Heures d'ouverture</Col>
        </Row>
        <hr/>
        <Row>
          <Col>lundi</Col>
          <Col xs={8}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>mardi</Col>
          <Col xs={8}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>mercredi</Col>
          <Col xs={8}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>jeudi</Col>
          <Col xs={8}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col>vendredi</Col>
          <Col xs={8}>12h-13h30 | 19h30-22h30</Col>
        </Row>
        <Row>
          <Col>samedi</Col>
          <Col xs={8}>19h30-22h30</Col>
        </Row>
        <Row>
          <Col>dimanche</Col>
          <Col xs={8}>fermé</Col>
        </Row>        
      </Container>
    </div>
  );
}

export default Schedule;