import React from "react";
import { fetchTVShows } from "./api";
import TvShowsGrid from "./TvShowsGrid";
import "./SASS/popular.scss";
import Search from "./Search";

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
        <Search />
        <TvShowsGrid tvShows={this.state.tvShows} title="Most popular Tv Shows"/>
      </React.Fragment>
    );
  }
}
