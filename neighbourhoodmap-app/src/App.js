import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import SidePanel from './SidePanel.js'
import './App.css';

//https://www.npmjs.com/package/google-map-react

let latitude = 51.509865;
let longitude = -0.118092;

export class App extends Component {
  state = {
    locations: [
            {
                title: 'Hyde Park',
                park_id: 'xxx',
                lat: 51.5072715,,
                lng: -0.167919,
                visible: true
            },{
                title: 'Regents Park',
                park_id: 'xxx',
                lat: 51.5302941,
                lng: -0.1520961,
                visible: true
            },{
                title: 'Richmond Park',
                park_id: 'xxx',
                lat: 51.4463902,
                lng: -0.2779614,
                visible: true
            },{
                title: 'Greenwich Park',
                park_id: 'xxx',
                lat: 51.4769128,
                lng: -0.0007244,
                visible: true
            },{
                title: 'Hampstead Heath',
                park_id: 'xxx',
                lat: 51.5608454,
                lng: -0.1653263,
                visible: true
            },{
                title: 'Battersea Park',
                park_id: 'xxx',
                lat: 51.4791108,
                lng: -0.1586868,
                visible: true
            }]
          }
  }

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
