import React, { useState } from "react";
import NormalButton from "../normalButton/normalButton.jsx";
import classNames from "../../utils/classNames.js";

import * as styles from "./bgImg.css";

function BgImg(props) {
  let [clearImgEnabled, setClearImgEnabled] = useState(false);

  return (
    <div className={classNames(styles.main, {
      [styles.clearImgEnabled]: clearImgEnabled
    })}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${JSON.stringify(props.imgSrc)})`,
          backgroundPositionY: props.imgPosY,
        }}
      />
      {props.children}
      <NormalButton
        className={styles.toggleClearImgButton}
        onClick={() => setClearImgEnabled(!clearImgEnabled)}
      >
        {"👁" /* TODO: Make asset for eye */}
      </NormalButton>
    </div>
  );
};

export default BgImg;