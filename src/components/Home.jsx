import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Schedule from "./Schedule";
import MyCarousel from "./MyCarousel";
import CustomMap from "./CustomMap";
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
            <h2>Restaurant Savoyard <a href="#map" className="lead text-nowrap link-dark">Rue de Saint-Malo à Rennes</a></h2>
            <p className="p-2 mark">
              Dans un cadre chaleureux, goûtez les principales recettes savoyardes et vivez un moment innoubliable.
            </p>
          </Col>
          <Col xs={12} md={4} className="m-auto">
            <Image className="storefront" src="./img/1.jpg" fluid />
          </Col>
        </Row>
        <Row xs={1} md={2} className="mt-4 mx-xs-4 g-1">
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
          <Col className="d-grid mx-5">
            <Button variant="primary" href="/menu" size="lg" className="text-white bold">Consulter notre carte</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <MyCarousel></MyCarousel>
          </Col>
        </Row>
        {/* schedule */}
        <Row className="mt-4 mb-4">
          <Col>
            <Schedule />
          </Col>
        </Row>
        {/* map */}
        <Row id="map" className="mt-4 mb-4">
          <Col>
            <CustomMap />
          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default Home;