import React, {Component} from 'react';
import Park from './Park.js'
import './App.css';

export class SidePanel extends Component {


  render() {

    const {locations} = this.props;

    return (
      <div id="sidepanel">
      <h1>London Parks</h1>
      <ul id="parklist">
      {this.props.locations.map((location) => {
          return <Park park={location} key={location.title} />
        })
      }
      </ul>
      </div>
    );
  }
}

export default SidePanel
