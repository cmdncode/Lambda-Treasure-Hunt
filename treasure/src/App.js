import React from "react";
import Form from "./components/form";
import Map from "./components/map";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand">Lambda Treasure Hunt</p> 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <hr />
            </div>
          </nav> <br />
        <Form />
        <Map />
      </div>
    );
  }
}

export default App;