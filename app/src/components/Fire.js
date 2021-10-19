import React from "react";

import { Map } from "@esri/react-arcgis";

export default (props) => (
  <Map class="full-screen-map" mapProperties={{ basemap: "satellite" }} />
);
