import React, { Component } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
  }
}

class App extends Component {
    render() {
      return (
        <Tabs
          id="controlled-tab"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="home" title="Home">
            <h2>1</h2>
          </Tab>
          <Tab eventKey="profile" title="Profile">
          <h2>2</h2>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
          <h2>3</h2>
          </Tab>
        </Tabs>
      );
    }
  }
export default App;

