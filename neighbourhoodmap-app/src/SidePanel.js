import React, {Component} from 'react';
import Park from './Park.js'
import './App.css';

export class SidePanel extends Component {


  render() {

    return (
      <div id="sidepanel">
      <h1>London Parks</h1>
      <ul id="parklist">
      {this.props.locations.map((location) => {
          return <Park park={location} key={location.title} parkName={location.title} parkId={location.park_id} />
        })
      }
      </ul>
      </div>
    );
  }
}

export default SidePanel
