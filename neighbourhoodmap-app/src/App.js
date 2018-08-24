import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import SidePanel from './SidePanel.js'
import './App.css';

//https://www.npmjs.com/package/google-map-react

let latitude = 51.509865;
let longitude = -0.118092;

export class App extends Component {

  static defaultProps = {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom: 13
    };

  render() {

    return (
      <div id="container">
      <div id="map">
       <GoogleMap
         bootstrapURLKeys={{ key: 'AIzaSyBMnyIBj3U21kJmlK0PnWg6ZUOq-5OYH2o' }}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}>
       </GoogleMap>
     </div>
     <SidePanel />
   </div>
    );
  }
}

export default App
