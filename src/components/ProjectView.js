import React from "react";
import colorCollector from "../static/colorCollector.png";

const ProjectView = () => {
  return (
    <div className="project__container">
      <h1 className="project__header">Projects</h1>
      <div className="project__card-container">
        <div className="project__card">
          <span className="project__card-name">TrailFinder</span>
          <div className="project__card-image" />
        </div>
        <div className="project__card">
          <span className="project__card-name">Color Collector</span>
          <div className="project__card-image" />
        </div>
        <div className="project__card">
          <span className="project__card-name">Shell</span>
          <div className="project__card-image" />
        </div>
        <div className="project__card">
          <span className="project__card-name">PrintF</span>
          <div className="project__card-image" />
        </div>
        <div className="project__card">
          <span className="project__card-name"> HackerNews</span>
          <div className="project__card-image" />
        </div>
        <div className="project__card">
          <span className="project__card-name"> Contact Manager</span>
          <div className="project__card-image" />
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
