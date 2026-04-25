import React from "react";

import * as styles from "./bgImg.css";

function BgImg(props) {
  return (
    <div className={styles.main}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${JSON.stringify(props.imgSrc)})`,
          backgroundPositionY: props.imgPosY,
        }}
      />
      {props.children}
    </div>
  );
};

export default BgImg;