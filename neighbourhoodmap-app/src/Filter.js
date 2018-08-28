import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

export class Filter extends Component {

  render(){

    return(
      <div className="filter">
        <select onChange={this.props.updateList}>
          <option value="Area" disabled="disabled">Select area...</option>
          <option value="">All</option>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="east">East</option>
          <option value="west">West</option>
        </select>
      </div>
    )
  }
}



export default Filter
