import React, { Component } from 'react';
import SidePanel from './SidePanel.js';
import Map from './Map.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><i class="fas fa-map-signs"></i>Neighbourhood Map</h1>
        </header>
        <body>
        <SidePanel />
        <Map />
        </body>
      </div>
    );
  }
}

export default App;
