import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <a href="/" class="dropbtn">
          Dropdown
        </a>
        <div class="dropdown-content">
          <a href="/fire1">Link 1</a>
          <a href="/fire2">Link 2</a>
          <a href="/fire3">Link 3</a>
        </div>
      </div>
      <div className="rightSide">
        <a href="/critical-resource-needs">Critical Resource Needs</a>
        <a href="/projected-movement">Projected Movement</a>
        <a href="/committed-resources">Committed Resources</a>
      </div>
    </div>
  );
}

export default Navbar;
