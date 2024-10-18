import type { JSX } from "react";

/**
 * renders the gradient-background component.
 * @returns {JSX.Element} the gradient-background component.
 */
const GradientBackground = ({}): JSX.Element => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <defs>
        <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="161"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <rect width="900" height="600" fill="#ffffff"></rect>
      <g filter="url(#blur1)">
        <circle cx="4" cy="291" fill="#00CC99" r="357"></circle>
        <circle cx="331" cy="204" fill="#ffffff" r="357"></circle>
        <circle cx="170" cy="395" fill="#00CC99" r="357"></circle>
        <circle cx="470" cy="423" fill="#00CC99" r="357"></circle>
        <circle cx="599" cy="48" fill="#ffffff" r="357"></circle>
        <circle cx="679" cy="478" fill="#00CC99" r="357"></circle>
      </g>
    </svg>
  );
};

export default GradientBackground;
