import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
  )
}

export default CustomMap;