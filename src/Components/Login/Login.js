import React from "react";
import "./style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="auth-container">
        <div className="login-social">
          <h2>Login with:</h2>
          <button className="facebook-btn" />
        </div>
        <p className="or-line">
          <span>Or</span>
        </p>
        <form className="login-form">
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
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
