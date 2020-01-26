import React from "react";
import { Link } from "react-router-dom";
import "./SASS/popular.scss";

export default class TvShowsGrid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <h1 className="title">{this.props.title}</h1>

          <div className="tvShows">
            {this.props.tvShows.map(tvShow => {
              return (
                <Link
                  className="link"
                  to={{
                    pathname: "/tvshow",
                    search: `?tvShow_id=${tvShow.id}`
                  }}
                >
                  <div key={tvShow.id} className="tvShow-container">
                    <div className="tvShow-img">
                      <img
                        alt={tvShow.name}
                        src={tvShow.image_thumbnail_path}
                      />
                    </div>
                    <div className="tvShow-info">
                      <h1>{tvShow.name}</h1>
                      <h5>
                        Since {tvShow.start_date}
                        <span>by {tvShow.country}</span>
                      </h5>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
