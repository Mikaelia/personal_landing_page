import React from "react";
import Section from "../components/Section";
import Story from "./Story";
import Birds from "../components/Birds";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

const MainApp = () => (
  <div className="main-app">
    <Section class="section section--hero">
      <Birds />
    </Section>
    <Story>
      <Introduction />
    </Story>

    <Section class="section section--about" />
    <Footer />
  </div>
);

export default MainApp;
