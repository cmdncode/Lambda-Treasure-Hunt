import React, { Component } from 'react';
import Titles from './components/titles'
import Stats from './components/stats'
import Map from './components/map'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactCytoscape from 'react-cytoscape';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Titles />
        <Stats />
        <Map />
        <ReactCytoscape containerID="map" 
        elements={this.getElements()} 
        cyRef={(map) => { this.map = map; console.log(this.map) }} 
        layout={{name: 'ROOM'}} />  
      </div>
    );
  };
};




