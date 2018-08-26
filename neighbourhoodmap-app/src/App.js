import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import SidePanel from './SidePanel.js'
import Marker from './Marker.js'
import './App.css';

//https://www.npmjs.com/package/google-map-react

let latitude = 51.509865;
let longitude = -0.118092;

export class App extends Component {

  state = {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom: 12,
      locations: [
              {
                  title: 'Hyde Park',
                  park_id: '1',
                  lat: 51.5072715,
                  lng: -0.167919,
                  visible: true
              },{
                  title: 'Regents Park',
                  park_id: '2',
                  lat: 51.5302941,
                  lng: -0.1520961,
                  visible: true
              },{
                  title: 'Richmond Park',
                  park_id: '3',
                  lat: 51.4463902,
                  lng: -0.2779614,
                  visible: true
              },{
                  title: 'Greenwich Park',
                  park_id: '4',
                  lat: 51.4769128,
                  lng: -0.0007244,
                  visible: true
              },{
                  title: 'Hampstead Heath',
                  park_id: '5',
                  lat: 51.5608454,
                  lng: -0.1653263,
                  visible: true
              },{
                  title: 'Battersea Park',
                  park_id: '6',
                  lat: 51.4791108,
                  lng: -0.1586868,
                  visible: true
              },{
                  title: 'Victoria Park',
                  park_id: '7',
                  lat: 51.5365647,
                  lng: -0.0411607,
                  visible: true
              },{
                  title: 'Queen Elizabeth Olympic Park',
                  park_id: '8',
                  lat: 51.5311926,
                  lng: -0.0733877,
                  visible: true
              },{
                  title: 'Crystal Palace Park',
                  park_id: '9',
                  lat: 51.4218537,
                  lng: -0.074574,
                  visible: true
              },{
                  title: 'Clapham Common',
                  park_id: '10',
                  lat: 51.4587191,
                  lng: -0.1517784,
                  visible: true
              },{
                  title: 'Dulwich Park',
                  park_id: '11',
                  lat: 51.4489961,
                  lng:-0.1487269,
                  visible: true
              }]

    };

  render() {

    return (
      <div id="container">
      <div id="map">
       <GoogleMap
         bootstrapURLKeys={{ key: 'AIzaSyBMnyIBj3U21kJmlK0PnWg6ZUOq-5OYH2o' }}
         defaultCenter={this.state.center}
         defaultZoom={this.state.zoom}>
         {this.state.locations.map((location) => {
             return <Marker key={location.park_id} lat={location.lat} lng={location.lng}/>
           })
         }
       </GoogleMap>
     </div>
     <SidePanel locations={this.state.locations}/>
   </div>
    );
  }
}

export default App
