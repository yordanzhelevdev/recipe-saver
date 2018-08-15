import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    const authenticated = this.props.authenticated;
    return (
      <header className="site-header">
        <h1>
          <span role="img" aria-label="meat on bone">
            🍖
          </span>
          Recipe Saver
          <span role="img" aria-label="meat on bone">
            🍖
          </span>
        </h1>
        <ul className="header-buttons">
          <li>
            {authenticated ? (
              <Link to="/logout" className="btn-logOut">
                {" "}
                Log Out
              </Link>
            ) : (
              <Link to="/login" className="btn-logIn">
                {" "}
                Login/Register
              </Link>
            )}
          </li>
          <li>
            {this.props.authenticated && (
              <button
                className="btn-loadSampleData"
                onClick={this.props.loadSampleData}
              >
                Load Sample Data
              </button>
            )}
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
