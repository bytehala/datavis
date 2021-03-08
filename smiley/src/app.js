import React from "react";
import ReactDOM from "react-dom";
import { Face } from "./Face";

const width = 960;
const height = 500;

const App = () => (
  <Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={30}
    eyeOffsetX={80}
    eyeCenterY={-80}
    eyeRadius={30}
    mouthWidth={20}
    mouthRadius={90}
  />
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
