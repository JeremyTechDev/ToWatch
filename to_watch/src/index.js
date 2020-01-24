import React from "react";
import ReactDOM from "react-dom";
import { fetchTVShows } from "./api";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShows: []
    };
  }

  componentDidMount() {
    fetchTVShows().then(tvShows => {
      this.setState({
        tvShows: tvShows
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tvShows.map(show => {
          return (
            <div key={show.id} className="tvShow-container">
              <div className="tvShow-img">
                <img alt={show.name} src={show.image_thumbnail_path} />
                {show.network}
              </div>
              <div className="tvShow-info">
                <h4>{show.country}</h4>
                <h4>{show.status}</h4>
                <h2>{show.name}</h2>
                <h3>Started on {show.start_date}</h3>
                {show.end_date && <h3>Ended on {show.end_date}</h3>}
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
