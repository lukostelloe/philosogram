import React from "react";
import "./Login.css";

function Login() {
  const handleSubmit = () => {
    console.log("log in button");
  };

  return (
    <div className="container">
      <div className="container_description">
        <h1>philosogram</h1>
        <p>Philosgram helps answer life's questions</p>
      </div>
      <div className="container_form">
        <form onSubmit={handleSubmit} className="container_form_form">
          <input type="text" placeholder="Email address or phone number" />
          <input type="text" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        <a href="/">Forgotten Password?</a>
        <button>Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
