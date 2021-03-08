import React from 'react'

import { FaceCircle } from "./FaceCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { FaceContainer } from "./FaceContainer";

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeCenterY,
    eyeRadius,
    mouthWidth,
    mouthRadius,
  }) => (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <FaceCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
      <Eyes
        eyeRadius={eyeRadius}
        eyeOffsetX={eyeOffsetX}
        eyeCenterY={eyeCenterY}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );