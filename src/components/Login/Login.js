import React from "react";
import "./Login.css";

function Login() {
  const handleSubmit = () => {
    console.log("log in button");
  };

  return (
    <div className="login_container">
      <div className="container_description">
        <h1>philosogram</h1>
        <p>follow the world's most influential philosophers</p>
      </div>
      <div className="container_form">
        <form onSubmit={handleSubmit} className="container_form_form">
          <input
            type="text"
            placeholder="Email address or phone number"
            className="form_input"
          />
          <input type="text" placeholder="Password" className="form_input" />
          <button type="submit" className="form_login_button">
            Log In
          </button>
        </form>
        <a href="/" className="form_login_forgot">
          Forgotten Password?
        </a>
        <button className="form_login_create">Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
