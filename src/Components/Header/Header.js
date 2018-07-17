import React from "react";
import "./style.css";

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
          <button className="btn-loadSampleData" onClick={this.loadSampleData}>
            Load Sample Data
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
