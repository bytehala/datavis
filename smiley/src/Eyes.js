import React from 'react'

const shineRadius = 5;
export const Eyes = ({eyeRadius, eyeOffsetX, eyeCenterY}) => {
    return (
        <>
        <circle
      r={eyeRadius}
      cx={-eyeOffsetX}
      cy={eyeCenterY}
      stroke="black"
      strokeWidth="10"
    />
    <circle
      r={eyeRadius}
      cx={eyeOffsetX}
      cy={eyeCenterY}
      stroke="black"
      strokeWidth="10"
    />
    <circle
      r={shineRadius}
      cx={eyeOffsetX}
      cy={eyeCenterY - 10}
      stroke="white"
      strokeWidth="10"
    />
    <circle
      r={1}
      cx={eyeOffsetX + 15}
      cy={eyeCenterY - 20}
      stroke="white"
      strokeWidth="10"
    />
    <circle
      r={shineRadius}
      cx={-eyeOffsetX}
      cy={eyeCenterY - 10}
      stroke="white"
      strokeWidth="10"
    />
    <circle
      r={1}
      cx={-eyeOffsetX + 15}
      cy={eyeCenterY - 20}
      stroke="white"
      strokeWidth="10"
    />
        </>
    )
}