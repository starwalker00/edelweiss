import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Schedule() {
  return (
    <div className="schedule">
      <Container className="text-center shadow">
        <Row>
          <Col className="display-6 mt-3">Horaires d'ouverture</Col>
        </Row>
        <hr className="mt-2" />
        <div className="text-capitalize">
          <Row className="py-3 fs-5">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>lundi</Col>
            <Col xs={9} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
          </Row>
          <Row className="py-3 fs-5 bg-secondary bg-opacity-25">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>mardi</Col>
            <Col xs={9} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
          </Row>
          <Row className="py-3 fs-5">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>mercredi</Col>
            <Col xs={9} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
          </Row>
          <Row className="py-3 fs-5 bg-secondary bg-opacity-25">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>jeudi</Col>
            <Col xs={9} md={6} lg={4}>12h-13h30 | 19h30-22h</Col>
          </Row>
          <Row className="py-3 fs-5">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>vendredi</Col>
            <Col xs={9} md={6} lg={4}>12h-13h30 | 19h30-22h30</Col>
          </Row>
          <Row className="py-3 fs-5 bg-secondary bg-opacity-25">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>samedi</Col>
            <Col xs={9} md={6} lg={4}>19h30-22h30</Col>
          </Row>
          <Row className="py-3 fs-5">
            <Col xs={{ span: 3, offset: 0 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }}>dimanche</Col>
            <Col xs={9} md={6} lg={4}>fermé</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Schedule;