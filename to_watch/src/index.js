import React from "react";
import ReactDOM from "react-dom";
import Popular from "./Popular";
import "./SASS/index.scss"

export default class App extends React.Component {

  render() {
    return (
      <Popular />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
