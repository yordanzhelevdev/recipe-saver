import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import ViewRecipe from "./Components/ViewRecipe/ViewRecipe";
import NoMatch from "./Components/NoMatch/NoMatch";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/view/:recipeId" component={ViewRecipe} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
