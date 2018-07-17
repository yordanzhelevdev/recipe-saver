import React from "react";
import "./style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="auth-container">
        <div className="login-form">
          <h2>Login with:</h2>
          <button className="facebook-btn" />
        </div>
        <div className="register-form">
          <h2>Register with:</h2>
          <button className="facebook-btn" />
        </div>
      </div>
    );
  }
}

export default Login;
