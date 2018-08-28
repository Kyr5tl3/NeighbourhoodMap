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
                  title: 'Hyde Park, London',
                  park_id: '1',
                  lat : 51.5072682,
                  lng : -0.1657303,
                  cardinal: 'north west',
                  visible: true
              },{
                  title: 'Regent\'s Park',
                  park_id: '2',
                  lat: 51.5312705,
                  lng: -0.1569694,
                  cardinal: 'north west',
                  visible: true
              },{
                  title: 'Richmond Park',
                  park_id: '3',
                  lat: 51.4463869,
                  lng: -0.2757727,
                  cardinal: 'south west',
                  visible: true
              },{
                  title: 'Greenwich Park',
                  park_id: '4',
                  lat: 51.47691,
                  lng: 0.001464,
                  cardinal: 'south east',
                  visible: true
              },{
                  title: 'Hampstead Heath',
                  park_id: '5',
                  lat: 51.5608421,
                  lng: -0.1631376,
                  cardinal: 'north west',
                  visible: true
              },{
                  title: 'Battersea Park',
                  park_id: '6',
                  lat: 51.4791075,
                  lng: -0.1564981,
                  cardinal: 'south west',
                  visible: true
              },{
                  title: 'Victoria Park, London',
                  park_id: '7',
                  lat: 51.5365614,
                  lng: -0.038972,
                  cardinal: 'north east',
                  visible: true
              },{
                  title: 'Queen Elizabeth Olympic Park',
                  park_id: '8',
                  lat: 51.5432961,
                  lng: -0.0165517,
                  cardinal: 'north east',
                  visible: true
              },{
                  title: 'Crystal Palace Park',
                  park_id: '9',
                  lat: 51.4218504,
                  lng: -0.0723853,
                  cardinal: 'south east',
                  visible: true
              },{
                  title: 'Clapham Common',
                  park_id: '10',
                  lat: 51.4587158,
                  lng: -0.1495897,
                  cardinal: 'south west',
                  visible: true
              },{
                  title: 'Peckham Rye Park',
                  park_id: '11',
                  lat: 51.4595857,
                  lng: -0.0638687,
                  cardinal: 'south east',
                  visible: true
              }],
        selectedArea: ''
    };

    updatedList = (selectedArea) => {
    this.setState({selectedArea:selectedArea})
    console.log('this is selectedArea',selectedArea)
  }

  render() {

    return (
      <div id="container">
      <div id="map">
       <GoogleMap
         bootstrapURLKeys={{ key: 'AIzaSyBMnyIBj3U21kJmlK0PnWg6ZUOq-5OYH2o' }}
         defaultCenter={this.state.center}
         defaultZoom={this.state.zoom}>
         {this.state.locations.filter((location) => {
           let area = location.cardinal;
           console.log(area)
           let cardinal = this.state.selectedArea
           console.log(cardinal)
           if (area.includes(cardinal)){
             console.log('if works')
             return location
           }
         }).map((location) => {
             return <Marker key={location.park_id} lat={location.lat} lng={location.lng}  />
           })
         }
       </GoogleMap>
     </div>
     <SidePanel locations={this.state.locations} updateList={this.updatedList} />
   </div>
    );
  }
}

export default App
