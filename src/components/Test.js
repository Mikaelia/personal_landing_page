import React, { Component } from "react";

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images.push(r(item));
  });
  return images;
}

const images = importAll(
  require.context("../static/artview-photos", false, /\.(png|jpe?g|svg)$/)
);

export default class Test extends Component {
  render() {
    return (
      <div className="gallery">
        {images.map((url, index) => (
          <img src={url} alt="test" key={index} />
        ))}
      </div>
    );
  }
}
