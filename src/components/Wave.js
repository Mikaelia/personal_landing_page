import React from "react";
import "../sass/_wave.scss";

const Wave = () => (
  <div className="wave-container">
    <svg
      className="wave"
      width="100%"
      height="172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="white">
        <animate
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="10s"
          values="M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z"
        />
      </path>
    </svg>
  </div>
);

export default Wave;
