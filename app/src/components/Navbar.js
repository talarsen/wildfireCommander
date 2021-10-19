import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <a href="/critical-resource-needs">Choose Fire</a>
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
