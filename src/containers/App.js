import React, { Component } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Story from "../containers/Story";
import Birds from "../components/Birds";
import About from "../components/About";

import "../sass/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section class="section section--hero">
          <Birds />
        </Section>
        <Story />
        <Section class="section section--about">
          <About />
        </Section>
      </div>
    );
  }
}

export default App;
