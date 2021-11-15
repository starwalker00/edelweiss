import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Schedule from "./Schedule";

function Home() {
  return (
    <div className="home">
      <Container fluid className="text-center">
        <Row className="mt-4">
          <Col>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Image src="./img/1.jpg" fluid />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;