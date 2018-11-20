import React from "react";

const LeftArrow = props => {
  return (
    <div
      className="slider__arrow slider__arrow--left"
      onClick={props.toPrevSlide}
    >
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
