import React, {Component} from 'react';
import Filter from './Filter.js'
import Park from './Park.js'
import './App.css';

export class SidePanel extends Component {

  state = {
    selectedArea: ''
  }

  updateList = (park, area) => {
  let selectedArea = park.target.value;
  this.setState({selectedArea:selectedArea});
  this.props.updateList(selectedArea)
  }

  render() {

    return (
      <div id="sidepanel">
      <h1>London Parks</h1>
      <Filter updateList={this.updateList} />
      <ul id="parklist">
      {this.props.locations.filter((location) => {
        let area = location.cardinal;
        let cardinal = this.state.selectedArea;
        if (area.includes(cardinal)){
          return location
        }
      }).map((location) => {
          return <Park park={location} key={location.title} parkName={location.title} parkId={location.park_id} />
        })
      }
      </ul>
      </div>
    );
  }
}

export default SidePanel
