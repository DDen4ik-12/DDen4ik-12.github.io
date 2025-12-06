import React from "react";

import * as styles from "./blockAndImg.css";

const BlockAndImg = (props) => {
  return props.imgToRight ? (
    <div className={styles.main}>
      <div className={styles.block}>
        {props.children}
      </div>
      <img src={props.imgSrc} style={{ width: props.imgWidth }} />
    </div>
  ) : (
    <div className={styles.main}>
      <img src={props.imgSrc} style={{ width: props.imgWidth }} />
      <div className={styles.block}>
        {props.children}
      </div>
    </div>
  );
};

export default BlockAndImg;