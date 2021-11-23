import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Row, Col } from 'react-bootstrap';

function CustomMap() {
  const containerStyle = {
    height: "40vh",
    width: "100%"
  };
  // om / maps / place / L'Edelweiss/@48.1164291,-1.6895099,15z/
  const defaultCenter = {
    lat: 48.11643656276332, lng: -1.6807652005599631
  }
  const defaultMarker = {
    lat: 48.11643656276332, lng: -1.6807652005599631
  }
  // const divStyle = {
  //   background: `transparent`,
  //   // border: `1px solid #ccc`,
  //   padding: 15,
  //   fontSize: 15,
  //   color: "#90a44c"
  // }
  return (
    <Container className="text-center shadow">
      <Row>
        <Col className="display-6 mt-3">Accès</Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <LoadScript
            googleMapsApiKey="AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={14}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <Marker
                position={defaultMarker}
              />
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          <a href="https://www.google.com/maps/search/?api=1&query=edelweiss+rennes" target="_blank" rel="noreferrer">
            Itinéraire via google maps
          </a>
        </Col>
      </Row>

    </Container >
  )
}

export default CustomMap;