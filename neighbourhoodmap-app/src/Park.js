import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

export class Park extends Component {

  componentDidMount(){
    this.wikiData();
  }

  // obtain summary of parks from Wikipedia & append to relevant park in side panel
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
}).done(function() {console.log('getJSON request succeeded!'); })
.fail(function() { alert('getJSON request failed! '); })
.always(function() { console.log('getJSON request ended!'); });
}

  render(){

    const {park} = this.props;

    return (
      <li className="park">
      <h3><i className="fas fa-tree"></i>{park.title}</h3>
      <div className={park.park_id +' wikiInfo'}></div>
      </li>
    )
  }
}
export default Park
