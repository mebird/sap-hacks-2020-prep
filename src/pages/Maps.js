import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.2767,
      lng: -123.1186
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5jQwTYjnGvjDY3Q7GJ35NNu78zdxVuJQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.2767}
            lng={-123.1186}
            text="Hello SAP"
          />
        </GoogleMapReact>
      </div>
    );
  }
}