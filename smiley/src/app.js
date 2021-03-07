import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

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

const mouthArc = arc()
                    .innerRadius(mouthRadius)
                    .outerRadius(mouthRadius + mouthWidth)
                    .startAngle(Math.PI / 2)
                    .endAngle(Math.PI + Math.PI / 2);

const App = () => (


     <svg width={width} height={height}>
     <g transform={`translate(${centerX}, ${centerY})`}>
    <circle r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
            ></circle>
    <circle r={eyeRadius} cx={ - eyeOffsetX} cy={eyeCenterY}   
            stroke="black"
            strokeWidth="10"
            />
    <circle r={eyeRadius} cx={ eyeOffsetX} cy={eyeCenterY}    
            stroke="black"
            strokeWidth="10"
            ></circle>
            <path d={mouthArc()} />
            </g>
            </svg>
);

console.log(arc);
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);