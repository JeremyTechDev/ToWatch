import React from "react";
import "./SASS/header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="logo-container">
            <h1>To Watch</h1>
          </div>

          <div className="search-bar">
            <form>
              <input type="text" className="bar" placeholder="Find me..." />
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
