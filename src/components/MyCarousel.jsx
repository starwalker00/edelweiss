import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

function MyCarousel() {
  return (
    <div className="mycarousel">
      <Container className="text-center">
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./img/carousel/i283726789463333744._szw1280h1280_.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./img/carousel/i283726789463333625._szw1280h1280_.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyCarousel;
