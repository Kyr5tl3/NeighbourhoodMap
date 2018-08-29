import React, {Component} from 'react';
import './App.css';

export class Marker extends Component {

  render(){

    const {park} = this.props;

    return(
      <div aria-hidden="true" tabindex="-1">
      <div aria-hidden="true" tabindex="-1" aria-labelledby="markerDetails" className={"markerDetails marker"+this.props.markerid}>{park.title}</div>
      <div aria-hidden="true" tabindex="-1" aria-labelledby="marker" className="marker" markerid={this.props.markerid} onClick={()=> this.props.onClick(this.props.location, this.props.markerid)} >
      </div>
      </div>
    )
  }
}

export default Marker
