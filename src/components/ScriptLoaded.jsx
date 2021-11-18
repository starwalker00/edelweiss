import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const CustomMap = () => {

  const mapStyles = {
    height: "40vh",
    width: "100%"
  };
  // om / maps / place / L'Edelweiss/@48.1164291,-1.6895099,15z/
  const defaultCenter = {
    lat: 48.1164291, lng: -1.6895099
  }
  const defaultMarker = {
    lat: 48.1164291, lng: -1.6895099
  }

  return (
    <LoadScript
      // randompublic api key
      googleMapsApiKey='AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      />
      <Marker
        position={defaultMarker}
      />
    </LoadScript>
  )
}

export default CustomMap;