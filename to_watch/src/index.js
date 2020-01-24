import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        Hello TV Shows
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));