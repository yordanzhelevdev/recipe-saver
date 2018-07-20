import React from "react";
import "./style.css";

import { Redirect } from "react-router-dom";
import { app, facebookProvider } from "../../base";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
  }

  authWithFacebook() {
    app
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          console.log(error);
        } else {
          this.setState({ redirect: true });
        }
      });
  }

  authWithEmailPassword(e) {
    e.preventDefault();
    console.table([
      {
        email: this.emailInput.value,
        password: this.password.value
      }
    ]);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="" />;
    }
    return (
      <div className="auth-container">
        <div className="login-social">
          <h2>Login with:</h2>
          <button className="facebook-btn" onClick={this.authWithFacebook} />
        </div>
        <p className="or-line">
          <span>Or</span>
        </p>
        <form
          className="login-form"
          onSubmit={this.authWithEmailPassword}
          ref={form => (this.loginForm = form)}
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            ref={input => (this.emailInput = input)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={input => (this.password = input)}
          />
          <input type="submit" value="Login" />
        </form>
        {/*
       <div className="register-form">
          <h2>Register with:</h2>
          <button className="facebook-btn" />
        </div>
       */}
      </div>
    );
  }
}

export default Login;
