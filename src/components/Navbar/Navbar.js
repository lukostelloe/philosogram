import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/homepage" className="link">
        philosogram
      </Link>
      <input type="text" placeholder="Search.." className="link" />
      <div className="link">
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
    </div>
  );
}

export default Navbar;
