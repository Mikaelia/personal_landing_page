import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectView = () => {
  return (
    <div className="project__container">
      <h1 className="project__header">Projects</h1>
      <div className="project__card-container">
        <ProjectCard
          name="TrailFinder"
          imageNumber="1"
          link="https://github.com/Mikaelia/TrailFinder"
        />
        <ProjectCard
          name="Color Collector"
          imageNumber="2"
          link="https://github.com/Mikaelia/color-collector"
        />
        <ProjectCard
          name="AirBnB Clone"
          imageNumber="4"
          link="https://github.com/Mikaelia/AirBnB_clone_v4"
        />
        <ProjectCard
          name="C Shell"
          imageNumber="3"
          link="https://github.com/Mikaelia/C_shell"
        />
        <ProjectCard
          name="HackerNews Client"
          imageNumber="5"
          link="https://github.com/Mikaelia/hackernews-manager"
        >
          * Image Coming Soon *
        </ProjectCard>
        <ProjectCard
          name="Contact Manager"
          imageNumber="5"
          link="https://github.com/Mikaelia/contact-manager"
        >
          * Image Coming Soon *
        </ProjectCard>
      </div>
    </div>
  );
};

export default ProjectView;
