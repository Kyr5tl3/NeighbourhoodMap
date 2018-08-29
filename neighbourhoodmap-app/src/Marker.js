import React, {Component} from 'react';
import './App.css';

export class Marker extends Component {

  render(){

    return(
      <div>
      <div className="marker" markerid={this.props.markerid} onClick={()=> this.props.onClick(this.props.location, this.props.markerid)} >
      </div>
      <div className={"markerDetails "+this.props.markerid}>{this.props.location}</div>
      </div>
    )
  }
}

export default Marker
