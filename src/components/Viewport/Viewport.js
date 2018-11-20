import React from "react";
import Artview from "./Artview";

import "../../sass/_viewport.scss";

export default function Viewport(props) {
  const { artview, natureview, codeview } = props;

  return <div className="viewport slide-up">{/* artview ? <Artview /> */}</div>;
}
