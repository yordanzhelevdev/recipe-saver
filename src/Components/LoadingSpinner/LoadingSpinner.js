import React from "react";
import "./style.css";

const LoadingSpinner = ({ heading }) => (
  <div className="loader-wrapper">
    <h3>{heading}</h3>
    <div className="loader" />
  </div>
);

export default LoadingSpinner;
