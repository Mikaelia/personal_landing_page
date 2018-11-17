import React, { Component } from "react";
import Card from "../components/Card";
import View from "../components/View";

import "../sass/_about.scss";

export default class About extends Component {
  state = {
    viewport: false,
    artView: false,
    natureView: false,
    codeView: false
  };
  onCardClick = e => {
    //activate correct card view
    //toggle viewport
  };
  render() {
    return (
      <div className="about">
        <h2 className="about__header">About Me</h2>
        <div className="about__card-group">
          <Card
            title="Art"
            text="10 sections"
            image={require("../static/bg--secondary.svg")}
            onclick={onCardClick}
          />
          <Card
            title="Outside"
            text="11 sections"
            image={require("../static/bg--secondary.svg")}
          />
          <Card
            title="Code"
            text="5 sections"
            image={require("../static/bg--secondary.svg")}
          />
        </div>
        <View viewName={this.state.viewName} />
      </div>
    );
  }
}
