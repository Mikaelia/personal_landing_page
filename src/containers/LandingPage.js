import React from "react";
import Section from "../components/Section";
import Story from "./Story";
import Birds from "../components/Birds";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import ProjectView from "../components/ProjectView";
import Fade from "react-reveal/Fade";

const LandingPage = () => (
  <div className="main-app">
    <Section class="section section--hero">
      <Birds />
    </Section>
    <Story>
      <Fade left duration={2000} delay={300}>
        <Introduction />
      </Fade>
    </Story>
    <Section class="section section--about">
      <div className="rotation-correction">
        <Fade right duration={2000}>
          <ProjectView />
        </Fade>
      </div>
    </Section>
    <Footer />
  </div>
);

export default LandingPage;
