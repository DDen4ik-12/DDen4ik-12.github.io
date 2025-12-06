import React from "react";

import * as styles from "./button3dIcon.css";

const Button3dIcon = (props) => {
  const main = (
    <div
      className={styles.main}
      role="button"
      style={{
        "--hover-bg-color": props.bgColor,
        "--hover-border-color": props.borderColor
      }}
    >
      <span>{props.text}</span>
      <img className={styles.img} src={props.imgSrc} />
    </div>
  );
  return props.href == undefined ? main : (
    <a href={props.href}>
      {main}
    </a>
  );
};

export default Button3dIcon;