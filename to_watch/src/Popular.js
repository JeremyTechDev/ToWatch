import React from "react";
import { fetchTVShows } from "./api";
import "./SASS/popular.scss";

export default class Popular extends React.Component {
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
      <div className="tvShows">
        {this.state.tvShows.map(tvShow => {
          return (
            <div key={tvShow.id} className="tvShow-container">
              <div className="tvShow-img">
                <img alt={tvShow.name} src={tvShow.image_thumbnail_path} />
              </div>
              <div className="tvShow-info">
                <h1>{tvShow.name}</h1>
                <h5>
                  Since {tvShow.start_date}
                  <span>by {tvShow.network}</span>
                </h5>
                <h4>{tvShow.country}</h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
