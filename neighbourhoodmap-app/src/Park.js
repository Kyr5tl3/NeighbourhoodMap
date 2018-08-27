import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

export class Park extends Component {

  componentDidMount(){
    this.wikiData();
  }

  // let parkName = 'this park'

  wikiData(){
    let park = this.props;
    // let parkName = parkNameWithSpaces.replace(/\s/g,"%20");
    let parkName = park.parkName;
    let parkId = park.parkId;
    console.log(parkId);
    let url = 'http://en.wikipedia.org/w/api.php?action=parse&page=' + parkName + '&summary&format=json&callback=?'
    console.log(url);
    $.getJSON(url, function(json) {
      $('.'+parkName).html(json.parse.text['*'])
      $('.'+parkName).find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
      $('.'+parkName).find("a").attr("target", "_blank");
  });
  }

  render(){

    const {park} = this.props;

    return (
      <li className="park">
      <h2><i className="fas fa-tree"></i>{park.title}</h2>
      <div className={park.title}></div>
      </li>
    )
  }
}
export default Park
