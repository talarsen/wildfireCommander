import { useState, useEffect } from "react";

import { loadModules } from "esri-loader";

const Incident1Polygon = (props) => {
  const [graphic, setGraphic] = useState(null);
  useEffect(() => {
    loadModules(["esri/Graphic"])
      .then(([Graphic]) => {
        // Create a polygon geometry
        const polygon = {
          type: "polygon", // autocasts as new Polygon()
          rings: [
            [-121.2485, 40.00868],
            [-120.55452, 39.9327],
            [-120.46452, 40.24248],
            [-121.38851, 40.00868],
          ],
        };

        // Create a symbol for rendering the graphic
        const fillSymbol = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#FF0000",
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: "#fff",
            style: "dash",
            width: 1,
          },
        };

        // Add the geometry and symbol to a new graphic
        const graphic = new Graphic({
          geometry: polygon,
          symbol: fillSymbol,
        });
        setGraphic(graphic);
        props.view.graphic.add(graphic);
      })
      .catch((err) => console.error(err));

    return function cleanup() {
      props.view.graphic.remove(graphic);
    };
  }, []);

  return null;
};

export default Incident1Polygon;
