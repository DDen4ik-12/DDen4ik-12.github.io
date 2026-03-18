import React from "react";
import classNames from "../../utils/classNames.js";

import * as styles from "./normalButton.css";

function NormalButton({ className, bgColor, borderColor, href, children, ...props }) {
  const main = (
    <div
      className={classNames(styles.main, className)}
      role="button"
      style={{
        "--hover-bg-color": bgColor,
        "--hover-border-color": borderColor
      }}
      {...props}
    >
      {children}
    </div>
  );
  return href == undefined ? main : (
    <a href={href}>
      {main}
    </a>
  );
};

export default NormalButton;