import React from "react";
import "./Footer.css";
import githubImg from "../../Images/github.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content-wrapper">
          <span>
            Created with{" "}
            <span
              className="love"
              role="img"
              aria-label="heart emoticon"
              alt="heart emoticon"
            >
              &#x1F496;
            </span>
            by <span>Yordan Zhelev</span>
          </span>
          <a
            href="https://github.com/yordanzhelevdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="github icon" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
