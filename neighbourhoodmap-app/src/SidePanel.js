import React, {Component} from 'react';
import Filter from './Filter.js'
import Park from './Park.js'
import $ from 'jquery';
import './App.css';

export class SidePanel extends Component {

  state = {
    selectedArea: ''
  }

//update state to show parks in cardinal area
  updateList = (park, area) => {
  let selectedArea = park.target.value;
  this.setState({selectedArea:selectedArea});
  this.props.updateList(selectedArea)
  }

  // toggle the park name on map and the wiki information in the sidepanel when clicking on map marker
    onParkClick = (parkName, parkId) => {
      $('.popup').hide()
      $('.highlighted').toggleClass('highlighted', 'remove')
      $('.wikiInfo').hide()
      $('.'+parkId).toggle()
      $('div[markerid='+parkId+']').toggleClass('highlighted')
      $('.marker'+parkId).toggle()
      $('.popup:visible').find('.marker').css({'background-color':'#f05d5d'})
    }

  render() {

    return (
      <div id="sidepanel">
      <h1>London Parks</h1>
      <Filter updateList={this.updateList} />
      <ul id="parklist">
      {this.props.locations.filter((location) => {
        let area = location.cardinal;
        let cardinal = this.state.selectedArea;
        if (area.includes(cardinal)){
          return location
        } else {return null}
      }).map((location) => {
          return <Park park={location} key={location.title} parkName={location.title} parkId={location.park_id} onClick={this.onParkClick}/>
        })
      }
      </ul>
      <div className="reference">***Summary information obtained from Wikipedia en.wikipedia.org</div>
      </div>
    );
  }
}

export default SidePanel
