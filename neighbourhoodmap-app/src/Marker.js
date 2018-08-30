import React, {Component} from 'react';
import './App.css';

export class Marker extends Component {

  render(){

    const {park} = this.props;

    return(
      <div aria-hidden="true" tab-index="-1">
      <div className={"popup marker"+this.props.markerid}>
      <div aria-hidden="true" tab-index="-1" aria-labelledby="markerDetails" className="markerDetails">{park.title}
      <p className="minorDetails">Latitude: {park.lat}</p>
      <p className="minorDetails">Longitude: {park.lat}</p>
      </div>
      </div>
      <div aria-hidden="true" tab-index="-1" aria-labelledby="marker" className="marker" markerid={this.props.markerid}>
      </div>
      </div>
    )
  }
}

export default Marker
