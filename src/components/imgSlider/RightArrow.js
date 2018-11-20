import React from "react";

const RightArrow = props => {
  return (
    <div
      className="slider__arrow slider__arrow--right"
      onClick={props.toNextSlide}
    >
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
