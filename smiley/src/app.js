import React from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 30;

const eyeOffsetX = 80;
const eyeCenterY = 200;
const eyeRadius = 30;

const App = () => (


     <svg width={width} height={height}>
    <circle r={centerY - strokeWidth / 2} cx={centerX} cy={centerY}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
            ></circle>
    <circle r={eyeRadius} cx={centerX - eyeOffsetX} cy={eyeCenterY}   
            stroke="black"
            stroke-width="10"
            />
    <circle r={eyeRadius} cx={centerX + eyeOffsetX} cy={eyeCenterY}    
            stroke="black"
            stroke-width="10"
            ></circle>
            </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);