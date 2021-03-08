import React from "react";
import { arc } from "d3";

export const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI + Math.PI / 2);
  return <path d={mouthArc()} />;
};
