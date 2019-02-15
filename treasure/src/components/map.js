import React, { Component } from 'react';
// import ReactCytoscape from 'react-cytoscape';

export default class Map extends Component {
  constructor (){
    super();
      this.graph = {
        "0": [{ "x": 60, "y": 60 }, { "n": 10, "s": 2, "e": 4, "w": 1 }],
        "1": [{ "x": 59, "y": 60 }, { "e": 0 }],
        "2": [{ "x": 60, "y": 59 }, { "n": 0, "s": 6, "e": 3 }],
        "3": [{ "x": 61, "y": 59 }, { "s": 9, "e": 5, "w": 2 }],
        "4": [{ "x": 61, "y": 60 }, { "n": 23, "e": 13, "w": 0 }],
        "5": [{ "x": 62, "y": 59 }, { "w": 3 }],
        "6": [{ "x": 60, "y": 58 }, { "n": 2, "w": 7 }],
        "7": [{ "x": 59, "y": 58 }, { "n": 8, "e": 6, "w": 56 }],
        "8": [{ "x": 59, "y": 59 }, { "s": 7, "w": 16 }],
        "9": [{ "x": 61, "y": 58 }, { "n": 3, "s": 12, "e": 11 }],
        "10": [{ "x": 60, "y": 61 }, { "n": 19, "s": 0, "w": 43 }]
        }
      
      } 
     render(){
      return(
        <div > </div>
      )
       
     } 
    }
 



//   for (room in graph) {
//     render(
//       <button />
//     )   

// }

// export default Map;