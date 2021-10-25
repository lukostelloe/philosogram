import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/homepage" className="link">
        Homepage
      </Link>
      <Link to="/random" className="link">
        Random
      </Link>
    </div>
  );
}

export default Navbar;
