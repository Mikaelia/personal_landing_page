import React from "react";
import { Link } from "react-router-dom";

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
            <a href="#introduction-content" className="navigation__link">
              <span>01</span>About
            </a>
          </li>
          <li className="navigation__item">
            <a href="https://github.com/Mikaelia" className="navigation__link">
              <span>02</span>Projects
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.facebook.com/mikaelaspencils/"
              className="navigation__link"
            >
              <span>03</span>Pencil Art
            </a>
          </li>
          <li className="navigation__item">
            <Link to="/resume" className="navigation__link">
              <span>04</span>Resume
            </Link>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.linkedin.com/in/mikaela-gurney-947926b9/"
              className="navigation__link"
            >
              <span>05</span>LinkedIn
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://twitter.com/MikaelaGurney"
              className="navigation__link"
            >
              <span>05</span>Social
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
