import React from "react";
import colorCollector from "../static/colorCollector.png";

const ProjectView = () => {
  return (
    <div className="project__container">
      <h1 className="project__header">Projects</h1>
      <div className="project__card-container">
        <div className="project__card">TrailFinder</div>
        <div className="project__card">
          ColorCollector
          <div className="project__card-image" />
        </div>
        <div className="project__card">Shell</div>
        <div className="project__card">PrintF</div>
        <div className="project__card">HackerNews</div>
        <div className="project__card">Contact Manager</div>
      </div>
    </div>
  );
};

export default ProjectView;
