import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

export class Park extends Component {

  componentDidMount(){
    this.wikiData();
  }

  // summary of parks from Wikipedia
  wikiData(){
    let park = this.props;
    // let city = ' england';
    let thisPark = park.parkName;
    let parkName = thisPark;
    let parkId = park.parkId;

    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&callback=?", {
    titles: parkName,
  }, function(data) {
    let extract = Object.keys(data.query.pages).map(e =>
      `${data.query.pages[e].extract}`
  )
  $('.'+parkId).html(extract)
  })
}

  render(){

    const {park} = this.props;

    return (
      <li className="park">
      <h2><i className="fas fa-tree"></i>{park.title}</h2>
      <div className={park.park_id}></div>
      </li>
    )
  }
}
export default Park
