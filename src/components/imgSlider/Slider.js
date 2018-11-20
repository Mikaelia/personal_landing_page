import React, { Component } from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

// Find a way to hydrate state?

//// IMPORT IMAGE URLS ////
function importAll(r) {
  const urls = [];
  r.keys().map((item, index) => {
    urls.push(r(item));
  });
  return urls;
}

const urlArray = importAll(
  require.context("../../static/artview-photos", false, /\.(png|jpe?g|svg)$/)
);

//// SLIDER CLASS ////
class Slider extends Component {
  state = {
    images: urlArray,
    currentIndex: 0,
    translateValue: 0
  };

  toPrevSlide = () => {};

  toNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slider__slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider__wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow toPrevSlide={this.toPrevSlide} />

        <RightArrow toNextSlide={this.toNextSlide} />
      </div>
    );
  }
}

export default Slider;
