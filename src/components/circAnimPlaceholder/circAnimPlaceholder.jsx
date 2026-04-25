import React from "react";

import * as styles from "./circAnimPlaceholder.css";

function CircAnimPlaceholder() {
  return (
    <svg className={styles.main}>
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <circle className={styles.circ} />
      <circle className={styles.circ} />
    </svg>
  );
};

export default CircAnimPlaceholder;