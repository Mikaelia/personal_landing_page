import React, { Component } from "react";
import Card from "../components/Card";
import Arrow from "../components/Arrow";
import Viewport from "../components/Viewport/Viewport";

import "../sass/_about.scss";
import "../sass/_animations.scss";

export default class About extends Component {
  state = {
    selectedKey: "card-2",
    animate: false
  };

  // onCardClick = e => {
  //   const { name } = e.target;
  //   //activate correct card view
  //   //toggle viewport
  //   console.log({ name } + "was clicked!");
  // };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const el = document.querySelector(".about__header");
    const viewportOffset = el.getBoundingClientRect();
    console.log(viewportOffset.top);
    if (viewportOffset.top < 300) {
      this.setState({ animate: true });
    } else {
      this.setState({ animate: false });
    }
  };

  render() {
    return (
      <div className="about">
        <h2 className="about__header">About Me</h2>
        <div className="arrow-group">
          <Arrow animation={this.state.animate} />
          <Arrow animation={this.state.animate} />
          <Arrow animation={this.state.animate} />
        </div>
        <div className="about__card-group">
          <Card
            key="button-1"
            class="card-1"
            title="Nature"
            image={require("../static/hiking3.jpg")}
            handleClick={this.props.handleCardClick}
          />
          <Card
            class="card-2"
            title="Art"
            image={require("../static/portrait1.jpg")}
            handleClick={this.props.handleCardClick}
          />
          <Card
            class="card-3"
            title="Code"
            image={require("../static/github.png")}
            handleClick={this.props.handleCardClick}
          />
        </div>
        <Viewport viewName={this.state.viewName} />
      </div>
    );
  }
}
