import React from "react";

import { Card } from "react-bootstrap";

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);
  let style = {
    width: "25vh",
    float: "right",
    marginRight: "50px",
  };
  return (
    <Card style={style}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title main={main}>Today's Weather</Card.Title>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>Low: {temp_min}</p>
        <p>High: {temp_max}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
