import React from "react";

const ProjectCard = ({ imageNumber, link, name, children }) => (
  <div className="project__card">
    <span className="project__card-name">{name}</span>
    <a className="project__link" href={link}>
      To Project &rarr;
    </a>
    <div className={`project__card-image card-image--${imageNumber}`}>
      {children}
    </div>
  </div>
);

export default ProjectCard;
