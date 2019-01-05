import React from "react";
import Tree from "./Tree";

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <Tree />
      <p>
        Made with{" "}
        <span role="img" aria-label="sun">
          ☀️
        </span>
        by Mikaela Gurney
      </p>
    </div>
  );
}
