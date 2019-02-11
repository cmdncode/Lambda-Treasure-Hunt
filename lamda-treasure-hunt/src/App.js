import React, { Component } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <div className="container">
          <h1>Lambda Treasure Hunt</h1>
          <nav>
            <Button href="#">Map </Button>
            <Button href="#">About </Button>
          </nav>
        </div>
        </header>
      </div>
    );
  }}
export default App;