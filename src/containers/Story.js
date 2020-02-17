import React from "react";
import Wave from "../components/Wave";

const Story = ({ children }) => (
  <div className="story">
    <Wave />
    <div className="story__content">{children}</div>

  </div>

);

export default Story;
