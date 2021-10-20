import React from "react";

import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";

function ChooseFire() {
  return (
    <>
      <div>
        <h3> Select a Fire to View Fire Data </h3>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="/fire1">Fire 1</Dropdown.Item>
            <Dropdown.Item href="/fire2">Fire 2</Dropdown.Item>
            <Dropdown.Item href="/fire3">Fire 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default ChooseFire;
