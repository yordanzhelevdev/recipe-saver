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
            <Link to="/login" className="btn-loginOrRegister">
              {" "}
              Log out{" "}
            </Link>
          ) : (
            <Link to="/login" className="btn-loginOrRegister">
              {" "}
              Login/Register
            </Link>
          )}
          {this.props.authenticated && (
            <button
              className="btn-loadSampleData"
              onClick={this.loadSampleData}
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
