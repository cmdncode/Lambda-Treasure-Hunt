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
        <ReactCytoscape containerID="cy" 
        elements={this.getElements()} 
        cyRef={(cy) => { this.cy = cy; console.log(this.cy) }} 
        layout={{name: 'dagre'}} />  
      </div>
    );
  };
};




