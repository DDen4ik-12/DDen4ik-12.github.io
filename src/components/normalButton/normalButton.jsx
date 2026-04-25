import React from "react";
import classNames from "../../utils/classNames.js";

import * as styles from "./normalButton.css";

function NormalButton({
  linkClassName,
  className,
  bgColor,
  glassStyle = "normal",
  href,
  download,
  children,
  ...props
}) {
  const main = (
    <div
      className={classNames(styles.main, {
        [styles.glassStyle]: glassStyle == "normal",
        [styles.glassStyleDark]: glassStyle == "dark",
      }, className)}
      role="button"
      style={{
        "--hover-bg-color": bgColor
      }}
      {...props}
    >
      {children}
    </div>
  );
  return href == undefined ? main : (
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