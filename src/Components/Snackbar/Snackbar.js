import React from "react";
import "./style.css";

const SnackBar = ({ message, snackShow }) => (
  <div className={`snackbar ${snackShow ? "show" : ""}`}>{message}</div>
);

export default SnackBar;
