import React from "react";
import "./SASS/header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //API
    alert(this.state.searchBar)
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
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="bar"
                onChange={this.handleChange}
                value={this.state.searchBar}
                placeholder="Find me..."
              />
              <button title="Search" type="submit" className="bar-btn">
                <i class="fas fa-search" />
              </button>
            </form>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <ul>Popular</ul>
              </li>
              <li>
                <ul>fgsd</ul>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
