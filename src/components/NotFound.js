import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <p>Page not found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;
