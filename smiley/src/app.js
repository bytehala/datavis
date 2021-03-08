import React from "react";
import ReactDOM from "react-dom";
import { arc } from "d3";
import { FaceCircle } from "./FaceCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth"

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 30;

const eyeOffsetX = 80;
const eyeCenterY = -80;
const eyeRadius = 30;

const mouthWidth = 20;
const mouthRadius = 90;

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <FaceCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeRadius={eyeRadius}
        eyeOffsetX={eyeOffsetX}
        eyeCenterY={eyeCenterY}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </g>
  </svg>
);

console.log(arc);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
