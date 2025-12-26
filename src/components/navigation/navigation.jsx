import React from "react";

import * as styles from "./navigation.css";
import siteLogo from "/assets/siteLogo.svg";

const Navigation = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.panel}>
        <a href={props.websiteLink("/")} title="Сайт Денчика-12">
          <img className={styles.logo} src={siteLogo} />
        </a>
      </div>
      {props.children}
    </div>
  );
};

export default Navigation;