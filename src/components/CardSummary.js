import React from "react";

export default function CardSummary() {
  return (
    <div className="project__card-details">
      <h5>{name}</h5>
      <p>
        An application for finding, saving, and managing random trails near you
      </p>
      <p>Built with:</p>
      <p>
        ReactJS, Redux, Firebase for user authentication and account data
        storage, CSS Modules, GoogleMapsAPI, OpenWeatherAPI
      </p>
    </div>
  );
}
