import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-primary">Space Articles</h1>
      <div className="links">
        <Link to="/">Articles</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}

export default Navbar;
