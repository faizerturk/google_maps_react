import React, {Component} from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react";


const mapStyles = {
  width: "100%", overflow: "hidden", position: "relative",
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        disableDefaultUI={true}
        streetViewControl={true}
        zoomControl={true}
        mapTypeControl={true}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSuLaQoT1jvd4WjV6A2iYUO4x6SNcgnPE'
})(MapContainer);
