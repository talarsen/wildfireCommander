import React from "react";

import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";

function ChooseFire({ setIncidentNumber }) {
  const onSelect = (eventKey) => {
    setIncidentNumber(eventKey);
  };
  return (
    <>
      <div>
        <h3> Select a Fire </h3>
        <Dropdown onSelect={onSelect}>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item eventKey={"fire1"}>Fire 1</Dropdown.Item>
            <Dropdown.Item eventKey={"fire2"}>Fire 2</Dropdown.Item>
            <Dropdown.Item eventKey={"fire3"}>Fire 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default ChooseFire;
