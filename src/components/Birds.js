import React from "react";

import "../sass/_birds.scss";

export default function Birds() {
  return (
    <div className="container">
      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>
    </div>
  );
}
