import React from "react";

import { Scene } from "@esri/react-arcgis";

// import Incident1Polygon from "./Incident1Polygon";
const IncidentMap = (props) => {
  let style = {
    width: "25vw",
    height: "25vh",
    float: "right",
    marginRight: "50px",
  };
  let mapProperties = { basemap: "topo-vector" };
  let viewProperties = {
    // center: [-122.4443, 47.2529],
    center: [-121.2319, 40.3063],
    zoom: 10,
  };
  return (
    <>
      <Scene
        style={style}
        mapProperties={mapProperties}
        viewProperties={viewProperties}
      />
    </>
  );
};

export default IncidentMap;
