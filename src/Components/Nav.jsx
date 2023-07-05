import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav_container">
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/product">Product</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">Add to Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
