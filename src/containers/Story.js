import React, { Component } from "react";
import Wave from "../components/Wave";

import "../sass/_layout.scss";

export default class Story extends Component {
  render() {
    return (
      <div className="story-container">
        <Wave />
        <div className="story" />{" "}
      </div>
    );
  }
}
