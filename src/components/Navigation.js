import React from "react";
import "../sass/_navigation.scss";

export default function Navigation(props) {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label for="navi-toggle" className="navigation__button">
        <span className={"navigation__icon" + props.modifier}>&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Pencil Art
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>05</span>Other
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
