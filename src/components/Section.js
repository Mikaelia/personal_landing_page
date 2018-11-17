import React from "react";
import "../sass/_layout.scss";

export default function Section(props) {
  return <div className={"section " + props.class}> {props.children}</div>;
}
