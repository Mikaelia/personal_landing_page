import React from "react";
import colorCollector from "../static/colorCollector.png";

const ProjectView = () => {
  return (
    <div className="project__container">
      <h1 className="project__header">Projects</h1>
      <div className="project__card-container">
        <div className="project__card">
          <span className="project__card-name">TrailFinder</span>
          <div className="project__card-image card-image--1" />
        </div>
        <div className="project__card">
          <span className="project__card-name">Color Collector</span>
          <div className="project__card-image card-image--2" />
        </div>
        <div className="project__card">
          <span className="project__card-name">C Shell</span>
          <div className="project__card-image card-image--3" />
        </div>
        <div className="project__card">
          <span className="project__card-name">AirBnB</span>
          <div className="project__card-image card-image--4" />
        </div>
        <div className="project__card">
          <span className="project__card-name"> HackerNews</span>
          <div className="project__card-image card-image--5">
            * Coming Soon *
          </div>
        </div>
        <div className="project__card">
          <span className="project__card-name"> Contact Manager</span>
          <div className="project__card-image card-image--6">
            * Coming Soon *
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
