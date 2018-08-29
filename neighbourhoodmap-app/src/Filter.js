import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

export class Filter extends Component {

  render(){

    return(
      <div className="filter">
        <select onChange={this.props.updateList} aria-haspopup="listbox" aria-label="filter London parks">
          <option value="Area" role="listbox" disabled="disabled" aria-label="Select area">Select area...</option>
          <option value="" role="listbox" aria-label="All Parks">All</option>
          <option value="north" role="listbox" aria-label="Northern Parks">North</option>
          <option value="south" role="listbox" aria-label="Sputhern Parks">South</option>
          <option value="east" role="listbox" aria-label="Eastern Parks">East</option>
          <option value="west" role="listbox" aria-label="Western Parks">West</option>
        </select>
      </div>
    )
  }
}



export default Filter
