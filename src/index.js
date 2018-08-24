import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import ViewRecipe from "./Components/ViewRecipe/ViewRecipe";
import NoMatch from "./Components/NoMatch/NoMatch";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/view/:recipeId" component={ViewRecipe} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
