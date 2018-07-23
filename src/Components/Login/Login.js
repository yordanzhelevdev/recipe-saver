import React from "react";
import "./style.css";
import InfoIcon from "../../Images/info.png";

import { Redirect } from "react-router-dom";
import { app, facebookProvider } from "../../base";

import Snackbar from "../Snackbar/Snackbar";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      errorMsg: "",
      snackShow: false
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
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    app
      .auth()
      .fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          return app.auth().createUserWithEmailAndPassword(email, password);
        } else if (providers.indexOf("password") === -1) {
          //they used facebook
          this.loginForm.reset();
          this.setState({
            errorMsg: "Try alternative login.",
            snackShow: true
          });

          setTimeout(() => {
            this.setState({
              errorMsg: "",
              snackShow: false
            });
          }, 3000);
        } else {
          return app.auth().signInWithEmailAndPassword(email, password);
        }
      })
      .then(user => {
        if (user && user.email) {
          this.loginForm.reset();
          this.setState({ redirect: true });
        }
      })
      .catch(error => {
        this.setState({
          errorMsg: error.message,
          snackShow: true
        });

        setTimeout(() => {
          this.setState({
            errorMsg: "",
            snackShow: false
          });
        }, 3000);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="" />;
    }
    return (
      <div>
        <div className="auth-container">
          <div className="login-social">
            <h2>Login with:</h2>
            <button className="facebook-btn" onClick={this.authWithFacebook} />
          </div>
          <p className="or-line">
            <span>Or</span>
          </p>
          <p className="reg-note">
            <span className="note">
              <img src={InfoIcon} alt="Info icon" />
              <span>Note</span>
            </span>
            If you don't have an account already, this form will create your
            account.
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
              ref={input => (this.passwordInput = input)}
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
        <Snackbar
          snackShow={this.state.snackShow}
          message={this.state.errorMsg}
        />
      </div>
    );
  }
}

export default Login;
