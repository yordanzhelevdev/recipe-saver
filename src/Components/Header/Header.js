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
          </span>Recipe Saver<span role="img" aria-label="meat on bone">
            🍖
          </span>
        </h1>
        <div className="header-buttons">
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
          {this.props.authenticated && (
            <button
              className="btn-loadSampleData"
              onClick={this.props.loadSampleData}
            >
              Load Sample Data
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
