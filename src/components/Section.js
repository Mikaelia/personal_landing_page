import React from "react";

export default function Section(props) {
  return <div className={"section " + props.class}> {props.children}</div>;
}
