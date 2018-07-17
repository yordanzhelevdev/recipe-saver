import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
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
          <Link to="/login" className="btn-loginOrRegister">
            Login/Register
          </Link>
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
