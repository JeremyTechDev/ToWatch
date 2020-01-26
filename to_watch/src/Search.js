import React from "react";
import TvShowsGrid from "./TvShowsGrid";
import Header from "./Header";
import { handleSearch } from "./api";
import "./SASS/popular.scss";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShows: [],
      searchInput: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(q) {
    handleSearch(q).then(data => {
      this.setState({
        tvShows: data,
        searchInput: q
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header handleSubmit={this.handleSubmit} />
        {this.state.searchInput && (
          <TvShowsGrid
            tvShows={this.state.tvShows}
            title={'Search results for "' + this.state.searchInput + '"'}
          />
        )}
      </React.Fragment>
    );
  }
}
