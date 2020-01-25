import React from "react";
import { fetchTVShows } from "./api";
import Header from "./Header";
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
      <React.Fragment>
        <Header />
        <div className="content">
            <h1 className="title">Most popular tv shows</h1>

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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}