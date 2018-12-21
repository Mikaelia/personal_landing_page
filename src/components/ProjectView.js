import React from "react";
import { Link } from "react-router-dom";

const ProjectView = () => {
  return (
    <div className="project__container">
      <h1 className="project__header">Projects</h1>
      <div className="project__card-container">
        <div className="project__card">
          <span className="project__card-name">TrailFinder</span>
          <a
            className="project__link"
            href="https://github.com/Mikaelia/TrailFinder"
          >
            To Project &rarr;
          </a>
          <div className="project__card-image card-image--1" />
        </div>
        <div className="project__card">
          <span className="project__card-name">Color Collector</span>
          <a
            className="project__link"
            href="https://github.com/Mikaelia/color-collector"
          >
            To Project &rarr;
          </a>

          <div className="project__card-image card-image--2" />
        </div>
        <div className="project__card">
          <span className="project__card-name">C Shell</span>
          <a
            className="project__link"
            href="https://github.com/Mikaelia/C_shell"
          >
            To Project &rarr;
          </a>
          <div className="project__card-image card-image--3" />
        </div>
        <div className="project__card">
          <span className="project__card-name">AirBnB Clone</span>
          <a
            className="project__link"
            href="https://github.com/Mikaelia/AirBnB_clone_v4"
          >
            To Project &rarr;
          </a>
          <div className="project__card-image card-image--4" />
        </div>
        <div className="project__card">
          <span className="project__card-name"> HackerNews</span>
          <a
            className="project__link"
            href="https://github.com/Mikaelia/hackernews-manager"
          >
            To Project &rarr;
          </a>

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
