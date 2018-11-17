import React, { Component } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Story from "../containers/Story";
import Birds from "../components/Birds";

import "../sass/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section class="background background--primary">
          <Birds />
        </Section>
        <Story />
        <Section class="background background--secondary" />
      </div>
    );
  }
}

export default App;
