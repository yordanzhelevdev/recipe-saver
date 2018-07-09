import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import ViewRecipe from "./Components/ViewRecipe/ViewRecipe";

import { BrowserRouter, Route } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/view/:recipeId" component={ViewRecipe} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
