import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <Container className="text-center shadow-lg">
        <Row>
          <Col className="display-6 m-2">Contact</Col>
        </Row>
        <hr />
        <Row>
          <Col className="mt-2">
            <p>
              Nous prenons les <strong>réservations uniquement par téléphone</strong> au 02 22 22 22 22.
              <br />
              Pour d'autres sujets, vous pouvez nous contacter par ce formulaire :
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={true}>
            <Form bg="light">
              <Form.Group className=" text-left m-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control type="email" placeholder="nom@example.fr" />
              </Form.Group>
              <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={7} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;