import React from "react";
import classNames from "../../utils/classNames.js";

import * as styles from "./normalButton.css";

function NormalButton({
  linkClassName,
  className,
  href,
  download,
  children,
  ...props
}) {
  const main = (
    <div
      className={classNames(styles.main, className)}
      role="button"
      {...props}
    >
      {children}
    </div>
  );
  return href === undefined ? main : (
    <a
      className={linkClassName}
      href={href}
      download={download}
    >
      {main}
    </a>
  );
};

export default NormalButton;