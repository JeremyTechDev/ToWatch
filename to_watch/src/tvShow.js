import React from "react";
import { getShowDetails } from "./api";
import queryString from "query-string";
import "./SASS/tvShow.scss";
import Search from "./Search";

export default class TvShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShow: {},
      showEpisodes: false
    };

    this.toogleEpisodes = this.toogleEpisodes.bind(this);
  }

  toogleEpisodes() {
    this.setState({
      showEpisodes: !this.state.showEpisodes
    });
  }

  componentDidMount() {
    const { tvShow_id } = queryString.parse(this.props.location.search);
    getShowDetails(tvShow_id).then(data => {
      this.setState({
        tvShow: data
      });
    });
  }

  render() {
    const { tvShow, showEpisodes } = this.state;
    return (
      <React.Fragment>
        <Search />
        <div className="content">
          {this.state.tvShow && (
            <React.Fragment>
              <div className="show-pictures">
                <figure>
                  {tvShow.pictures !== undefined &&
                    tvShow.pictures.map(pic => {
                      return <img alt="" src={pic} />;
                    })}
                </figure>
              </div>

              <div className="show-data">
                <div className="show-info">
                  <img alt={tvShow.name} src={tvShow.image_path} />

                  <div>
                    <h1>{tvShow.name}</h1>
                    <h3>by {tvShow.network}</h3>
                  </div>
                </div>

                <p className="show-date">
                  Since {tvShow.start_date}, {tvShow.status}
                </p>

                <div className="show-highlights">
                  <div>
                    <h1>
                      <i class="fas fa-heart"></i>
                    </h1>
                    <p>
                      <span>
                        {Math.round(parseFloat(tvShow.rating) * 10) / 10}/10
                      </span>{" "}
                      from <span>{tvShow.rating_count}</span> voters
                    </p>
                  </div>
                  <div>
                    <h1>
                      <i class="fas fa-play"></i>
                    </h1>
                    <p>
                      <span>{tvShow.episodes && tvShow.episodes.length}</span>{" "}
                      episodes on{" "}
                      <span>
                        {tvShow.episodes &&
                          tvShow.episodes[tvShow.episodes.length - 1].season}
                      </span>{" "}
                      seasons
                    </p>
                  </div>
                  <div>
                    <h1>
                      <i class="fas fa-video"></i>
                    </h1>
                    <p>{tvShow.genres && tvShow.genres.join(" - ")}</p>
                  </div>
                </div>
                <p className="show-description">{tvShow.description}</p>

                <a
                  href={
                    "https://www.youtube.com/watch?v=" + tvShow.youtube_link
                  }
                  className="show-youtube"
                >
                  <i class="fab fa-youtube"></i> Watch Video
                </a>

                <div className="show-episodes">
                  <p
                    onClick={this.toogleEpisodes}
                    className="show-episodes-title"
                  >
                    Show Episodes{" "}
                    {(!showEpisodes && <i class="fas fa-angle-right"></i>) || (
                      <i class="fas fa-angle-down"></i>
                    )}
                  </p>
                  {tvShow.episodes &&
                    showEpisodes &&
                    tvShow.episodes.map(episode => {
                      return (
                        <div className="show-episode">
                          <div className="show-episode-season">
                            <h1>{episode.season}</h1>
                            <p>season</p>
                          </div>

                          <div className="show-episode-chapter">
                            <p>episode {episode.episode}</p>
                            <h1>{episode.name}</h1>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}
