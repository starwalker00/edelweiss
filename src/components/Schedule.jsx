import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Schedule() {
  return (
    <div className="schedule">
      <Container className="text-center">
        <Row>
          <Col>Heures d'ouverture</Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>lundi</Col>
          <Col xs={8} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>mardi</Col>
          <Col xs={8} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>mercredi</Col>
          <Col xs={8} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>jeudi</Col>
          <Col xs={8} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>vendredi</Col>
          <Col xs={8} md={6} lg={4}>12h-13h30 | 19h30-22h30</Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>samedi</Col>
          <Col xs={8} md={6} lg={4}>19h30-22h30</Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>dimanche</Col>
          <Col xs={8} md={6} lg={4}>fermé</Col>
        </Row>        
      </Container>
    </div>
  );
}

export default Schedule;