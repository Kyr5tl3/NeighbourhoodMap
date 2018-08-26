import React, {Component} from 'react';
import './App.css';

export class Park extends Component {

  render(){

    const {park} = this.props;

    return (
      <div className="park">
      <h2><i class="fas fa-tree"></i> {park.title}</h2>
      </div>
    )
  }
}

export default Park
