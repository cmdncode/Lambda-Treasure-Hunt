import React, { Component } from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar'


class App extends Component {
    render() {
      return (
        <Navbar class = "navbar">
          <h2 class = "nav-h2">Lambda Treasure Hunt</h2>
          <Navbar.Text class = "nav-text">
            Signed in as: <a href="#login">USER</a>
          </Navbar.Text>
        </Navbar>
)}}

export default App;