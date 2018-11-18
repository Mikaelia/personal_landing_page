import React from "react";

export default function Arrow(props) {
  return (
    <svg
      className={props.animation ? "about__icon bounce" : "about__icon"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ fill: `${props.fill} ` }}
    >
      <path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z" />
    </svg>
  );
}
