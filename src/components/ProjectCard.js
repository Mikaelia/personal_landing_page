import React from "react";

const ProjectCard = ({
  imageNumber,
  link,
  name,
  summary,
  technology,
  children
}) => (
  <div className="project__card">
    <div className="project__card-overlay">
      <div className="project__card-details">
        <h3 className="project__card-name">{name}</h3>
        <p className="project__card-summary">{summary}</p>
        <h5 className="project__card-tools">Built With:</h5>
        <p>{technology}</p>
      </div>
    </div>
    <a className="project__card-link" href={link}>
      To Project &rarr;
    </a>
    {children}
    <div className={`project__card-image card-image--${imageNumber}`} />
  </div>
);

export default ProjectCard;
