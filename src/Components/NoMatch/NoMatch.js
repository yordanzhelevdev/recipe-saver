import React from "react";
import notFound from "../../Images/404error.png";
import "./style.css";

const NoMatch = ({ location }) => (
  <div className="notFound-container">
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <img src={notFound} alt="404-not found" />
    </div>
  </div>
);

export default NoMatch;
