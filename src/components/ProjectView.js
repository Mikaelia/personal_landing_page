import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectView = () => {
  return (
    <div className="project__container">
      <h1 className="project__header">Projects</h1>
      <div className="project__card-container">
        <ProjectCard
          name="Color Collector"
          imageNumber="2"
          link="https://github.com/Mikaelia/colorverse"
          summary="Choose or input and name custom colors. Create and organize color palettes for your next design project"
          technology="ReactJS, Redux, Sass, custom notifications and UI"
        />
        <ProjectCard
          name="TrailFinder V2"
          imageNumber="5"
          link="https://github.com/Mikaelia/TrailFinder-V2"
          summary="*In Progress* Remake of TrailFinderV1. Features facebook and email authentication, based on user-selected parameters returns trails near geolocation or area selected on map"
          technology="Sass, JavaScript/ReactJS, GeolocationAPI, OpenTrailsAPI, GoogleMapsAPI, Firebase Oauth, methods to find trail distance from current location"
        />
        <ProjectCard
          name="AirBnB Clone"
          imageNumber="4"
          link="https://github.com/Mikaelia/AirBnB_clone_v4"
          summary="A fullstack Airbnb clone"
          technology="Python, Flask, JavaScript/jQuery, Jinja, SQL/SQLAlchemy, features handmade CLI, API, both file-based and SQL databases"
        />
        <ProjectCard
          name="TrailFinder"
          imageNumber="1"
          link="https://github.com/Mikaelia/TrailFinder"
          summary="An application for finding, saving, and managing random trails near you"
          technology="ReactJS, Redux, Firebase for user authentication and account data
        storage, CSS Modules, GoogleMapsAPI, OpenTrailsAPI, OpenWeatherAPI, GeolocationAPI"
        />
        <ProjectCard
          name="HackerNews Client"
          imageNumber="6"
          link="https://github.com/Mikaelia/hacker-news-client"
          summary="A React application to filter and sort top HackerNews stories"
          technology="ReactJS, HackerNewsAPI, Lodash for sorting. Developed caching functionality and paginated loading"
        />
        <ProjectCard
          name="C Shell"
          imageNumber="3"
          link="https://github.com/Mikaelia/C_shell"
          summary="This UNIX shell can read, interpret, and execute commands. It forks new processes, handles the PATH variable, manages memory, and supports the env and exit builtin commands"
          technology="C, bash"
        />
      </div>
    </div>
  );
};

export default ProjectView;
