import React, { useState } from "react";
import { Localized } from "@fluent/react";
import NormalButton from "../normalButton/normalButton.jsx";
import { allLocales } from "../l10nProviderHOC.jsx";
import classNames from "../../utils/classNames.js";

import * as styles from "./navigation.css";
import siteLogo from "/assets/siteLogo.svg";
import langIcon from "./lang.svg";

function Menu(props) {
  return (
    <div className={styles.menuWrapper}>
      <div className={classNames(styles.menu, { [styles.menuClosed]: !props.opened })}>
        {props.children}
      </div>
    </div>
  );
};

function Navigation(props) {
  let [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.panel}>
        <Localized
          id="navigation_logo-title"
          attrs={{ title: true }}
        >
          <a href={props.websiteLink("/")}>
            <img className={styles.logo} src={siteLogo} />
          </a>
        </Localized>
        <NormalButton
          className={classNames({
            [styles.buttonMenuOpen]: langMenuOpen
          })}
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          bgColor="var(--looks-main-40)"
          borderColor="var(--looks-main-30)"
        >
          <Menu opened={langMenuOpen}>
            {Object.entries(allLocales).map(([code, [name]]) => (
              <div
                key={code}
                className={styles.menuItem}
                onClick={(event) => {
                  event.stopPropagation();
                  props.changeLocales([code], true);
                  setLangMenuOpen(false);
                }}
              >
                <div
                  className={classNames(styles.checkmark, {
                    [styles.checkmarkChoosen]: code == props.currentLocales[0]
                  })}
                >
                  {"✔" /* TODO: Make asset for checkmark */}
                </div>
                {name}
              </div>
            ))}
          </Menu>
          <img src={langIcon} />
          {"▾" /* TODO: Make asset for arrow */}
        </NormalButton>
      </div>
      {props.children}
    </div>
  );
};

export default Navigation;