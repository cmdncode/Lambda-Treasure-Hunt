import React from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Map from "./components/map";

class App extends React.Component {
  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Map />
      </div>
    );
  }
}

export default App;