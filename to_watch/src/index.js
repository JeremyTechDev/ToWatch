import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./SASS/index.scss";

const Popular = React.lazy(() => import("./Popular"));
const TvShow = React.lazy(() => import("./tvShow"));

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <React.Suspense fallback={<h1>Loading</h1>}>
            <Switch>
              <Route exact path="/" component={Popular} />
              <Route exact path="/tvshow" component={TvShow} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </React.Suspense>
        </React.Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
