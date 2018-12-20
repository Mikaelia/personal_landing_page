import React from "react";

const ArtView = () => {
  const importAll = imports => {
    let images = imports.keys().map(item => imports(item));
    return images;
  };

  const images = importAll(
    require.context("../static/artview-photos", false, /\.(png|jpe?g|svg)$/)
  );

  const renderImage = (url, index) => (
    <div className={"artview__card card--" + index}>
      <img
        className="artiew__thumbnail"
        src={url}
        alt={"Image number " + (index + 1)}
      />
    </div>
  );

  return (
    <section className="artview__container">
      <div className="artview__gallery">
        {images.map((url, index) => renderImage(url, index))}
      </div>
    </section>
  );
};

export default ArtView;
