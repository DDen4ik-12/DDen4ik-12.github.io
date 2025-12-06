import React from "react";

import * as styles from "./circAnimPlaceholder.css";

const CircAnimPlaceholder = (props) => {
  return (
    <svg className={styles.main}>
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <text className={styles.text}>
        {props.text}
      </text>
    </svg>
  );
};

export default CircAnimPlaceholder;