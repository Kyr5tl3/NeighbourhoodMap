import React, {Component} from 'react';
import './App.css';

export class Marker extends Component {

  render(){

    const {park} = this.props;

    return(
      <div>
      <div className={"markerDetails marker"+this.props.markerid}>{park.title}</div>
      <div className="marker" markerid={this.props.markerid} onClick={()=> this.props.onClick(this.props.location, this.props.markerid)} >
      </div>
      </div>
    )
  }
}

export default Marker
