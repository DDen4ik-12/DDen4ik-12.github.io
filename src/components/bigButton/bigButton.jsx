import React from "react";

import * as styles from "./bigButton.css";

const BigButton = (props) => {
  const main = (
    <div
      className={styles.main}
      role="button"
      style={{
        "--hover-bg-color": props.bgColor,
        "--hover-border-color": props.borderColor
      }}
    >
      <img className={styles.img} src={props.imgSrc} />
      {props.children}
    </div>
  );
  return props.href == undefined ? main : (
    <a href={props.href} download={props.download}>
      {main}
    </a>
  );
};

export default BigButton;