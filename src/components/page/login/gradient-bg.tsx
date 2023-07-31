import React from "react";

interface IGradientBgProps {
  className?: string;
}

const GradientBg = ({ className }: IGradientBgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="a" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="red">
            <animate
              attributeName="stop-color"
              values="red;purple;blue;green;yellow;orange;red;"
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset=".5" stopColor="purple">
            <animate
              attributeName="stop-color"
              values="purple;blue;green;yellow;orange;red;purple;"
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stopColor="blue">
            <animate
              attributeName="stop-color"
              values="blue;green;yellow;orange;red;purple;blue;"
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 .5 .5"
            to="360 .5 .5"
            dur="20s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <linearGradient id="b" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="1">
          <stop offset="0" stopColor="red">
            <animate
              attributeName="stop-color"
              values="red;purple;blue;green;yellow;orange;red;"
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stopColor="purple" stopOpacity="0">
            <animate
              attributeName="stop-color"
              values="purple;blue;green;yellow;orange;red;purple;"
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            values="360 .5 .5;0 .5 .5"
            dur="10s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <rect fill="url(#a)" width="100%" height="100%" />
      <rect fill="url(#b)" width="100%" height="100%" />
    </svg>
  );
};

export default React.memo(GradientBg);
