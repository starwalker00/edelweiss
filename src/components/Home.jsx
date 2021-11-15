import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Schedule from "./Schedule";

function Home() {
  return (
    <div className="home">
      <Container fluid className="text-center">
        <Row>
          <Col>
            <Image src="http://placehold.it/900x400" rounded />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="./img/1.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;