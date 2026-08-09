import React from "react";
import classNames from "../../utils/classNames.js";

import * as styles from "./button3dIcon.css";

function Button3dIcon({ className, text, imgSrc, href, ...props }) {
  const main = (
    <div
      className={classNames(styles.main, className)}
      role="button"
      {...props}
    >
      <span>{text}</span>
      <img className={styles.img} src={imgSrc} />
    </div>
  );
  return href === undefined ? main : (
    <a href={href}>
      {main}
    </a>
  );
};

export default Button3dIcon;