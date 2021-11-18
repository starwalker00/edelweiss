import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Schedule from "./Schedule";
import MyCarousel from "./MyCarousel";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Home() {
  const cards_img = [
    { path: "./img/home-cards/fondue.jpg", title: "Fondue", description: "Recette incontournable de la gastronomie des Alpes." },
    { path: "./img/home-cards/raclette.jpg", title: "Raclette", description: "Une spécialité de montagne à dévorer pour les amoureux de fromage." }
  ];
  return (
    <div className="home">
      <Container fluid="md" className="text-center">
        <Row className="mt-4">
          <Col xs={12} md={8} className="m-auto">
            <h1>L'Edelweiss</h1>
            <h2>Restaurant Savoyard à Rennes</h2>
            <p className="lead">
              Dans un cadre chaleureux, goûtez les principales recettes savoyardes et vivez un moment innoubliable.
            </p>
          </Col>
          <Col xs={12} md={4} className="m-auto">
            <Image src="./img/1.jpg" fluid roundedCircle />
          </Col>
        </Row>
        <Row xs={1} md={2} className="mt-4 mx-4 g-1">
          {cards_img.map((card, idx) => (
            <Col key={idx}>
              <Card className="text-white">
                <Card.Img src={card.path} />
                <Card.ImgOverlay className="d-flex">
                  <Card.Title className="align-self-end bg-dark display-4">{card.title}</Card.Title>
                  <Card.Text className="align-self-end bg-dark lead d-none d-lg-block">
                    {card.description}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4 mx-3">
          <Col>
            <Card className="bg-info">
              <Card.Body>
                <Card.Title>Consultez notre carte</Card.Title>
                <Button variant="primary" href="/menu">Menu</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <MyCarousel></MyCarousel>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <Schedule />
          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default Home;