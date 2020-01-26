import React from "react";
import "./SASS/header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: "",
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //Saves avery change of the search-bar on the state
  handleChange = event => {
    this.setState({
      searchBar: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="logo-container">
            <h1>To Watch</h1>
          </div>

          <div className="search-bar">
            <input
              type="text"
              className="bar"
              onChange={this.handleChange}
              value={this.state.searchBar}
              placeholder="Find me..."
            />
            <button
              title="Search"
              type="button"
              onClick={() => this.props.handleSubmit(this.state.searchBar)}
              className="bar-btn"
            >
              <i class="fas fa-search" />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
