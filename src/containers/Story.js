import React, { Component } from "react";
import Wave from "../components/Wave";

import "../sass/_story.scss";

export default class Story extends Component {
  render() {
    return (
      <div className="story">
        <Wave />
        <div className="story__content" />{" "}
      </div>
    );
  }
}
