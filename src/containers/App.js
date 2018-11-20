import React, { Component } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Story from "./Story";
import Birds from "../components/Birds";
import About from "./About";
import Footer from "../components/Footer";
import Viewport from "../components/Viewport/Viewport";
// import Test from "../components/Test";

import "../sass/main.scss";

class App extends Component {
  state = {
    showViewport: false,
    activeView: "artView"
  };

  handleCardClick = e => {
    const category = e.target.getAttribute("category");
    this.setState({ activeView: category });
    this.setState({ showViewport: !this.state.showViewport });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Section class="section section--hero">
          <Birds />
        </Section>
        <Story />
        <Section class="section section--about">
          <About handleCardClick={this.handleCardClick} />
        </Section>
        {this.state.showViewport ? (
          <Viewport activeView={this.state.activeView} />
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default App;
