import React from "react";

const Slide = ({ image }) => {
  return (
    <div
      className="slider__slide"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default Slide;
