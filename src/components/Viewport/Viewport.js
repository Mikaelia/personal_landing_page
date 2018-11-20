import React from "react";
import Artview from "./Artview";
import Slider from "../imgSlider/Slider";

import "../../sass/_viewport.scss";

export default function Viewport(props) {
  const { activeView } = props;

  return (
    <div className="viewport slide-up">
      {activeView === "Art" && <Slider />}
    </div>
  );
}
