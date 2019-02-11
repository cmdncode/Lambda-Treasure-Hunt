import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';

class App extends Router {
  render() {
    return (
      <div className="App">
        <h1>Hello!!!</h1>
      </div>
    );
  }}
export default App;