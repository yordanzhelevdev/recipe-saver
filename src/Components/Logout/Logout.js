import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { app } from "../../base";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false
    };
  }
  componentDidMount() {
    app
      .auth()
      .signOut()
      .then(user => {
        this.setState({ redirect: true });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return <LoadingSpinner heading="Logging out" />;
  }
}

export default Logout;
