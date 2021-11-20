import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer bg-dark text-black">
      <footer className="pt-4">
        <Container fluid className="text-center text-md-left">
          <Row xs={1} md={2}>
            <Col>
              <h5 className="text-uppercase">Restaurant l'Edelweiss</h5>
              <p>34 Rue de Saint-Malo, 35000 Rennes
                <br />
                Réservations par téléphone
                <br />
                02 22 22 22 22
                <br />
              </p>
            </Col>
            <Col>
              <h5 className="text-uppercase">Liens</h5>
              <ul className="list-unstyled">
                <li><a className="link-secondary" href="/menu"> Menu </a></li>
                <li><a className="link-secondary" href="/schedule"> Horaires </a></li>
                <li><a className="link-secondary" href="/contact"> Contact </a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="footer-copyright text-center py-3">© 2021 Copyright:
              <a className="link-secondary mx-2" target="_blank" href="https://blank.page/" rel="noreferrer">https://blank.page/</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;