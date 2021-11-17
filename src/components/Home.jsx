import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Schedule from "./Schedule";
import MyCarousel from "./MyCarousel";

function Home() {
  return (
    <div className="home">
      <Container fluid="md" className="text-center">
        <Row className="mt-4">
          <Col xs={12} md={8} className="m-auto">
            <h1>Restaurant Savoyard à Rennes</h1>
            <p class="lead">
              Dans un cadre chaleureux, goûtez les principales recettes savoyardes et vivez un moment innoubliable.
            </p>
          </Col>
          <Col xs={12} md={4} className="m-auto">
            <Image src="./img/1.jpg" fluid />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <MyCarousel></MyCarousel>
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