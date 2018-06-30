import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

import { BrowserRouter, Route } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
