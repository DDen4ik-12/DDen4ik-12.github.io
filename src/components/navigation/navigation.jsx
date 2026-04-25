import React, { useState, useContext } from "react";
import { Localized } from "@fluent/react";
import NormalButton from "../normalButton/normalButton.jsx";
import { ThemeProviderCtx } from "../themeProviderHOC/themeProviderHOC.jsx";
import { allLocales, L10nProviderCtx } from "../l10nProviderHOC.jsx";
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
  const { darkMode, setDarkMode } = useContext(ThemeProviderCtx);
  const { changeLocales, currentLocales } = useContext(L10nProviderCtx);
  let [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <div className={styles.nav}>
      {props.children}
      <div className={styles.panel}>
        <Localized
          id="navigation_logo-title"
          attrs={{ title: true }}
        >
          <a href={props.websiteLink("/")}>
            <img className={styles.logo} src={siteLogo} />
          </a>
        </Localized>
        <div className={styles.buttonAndMenuWrapper}>
          <NormalButton
            className={classNames({
              [styles.buttonMenuOpen]: langMenuOpen
            })}
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            bgColor="var(--looks-main-40)"
          >
            <img className={styles.grayIcon} src={langIcon} />
            {"▾" /* TODO: Make asset for arrow */}
          </NormalButton>
          <Menu opened={langMenuOpen}>
            {Object.entries(allLocales).map(([code, [name]]) => (
              <div
                key={code}
                className={styles.menuItem}
                onClick={() => {
                  changeLocales([code], true);
                  setLangMenuOpen(false);
                }}
              >
                <div
                  className={classNames(styles.checkmark, {
                    [styles.checkmarkChoosen]: code == currentLocales[0]
                  })}
                >
                  {"✔" /* TODO: Make asset for checkmark */}
                </div>
                {name}
              </div>
            ))}
          </Menu>
        </div>
        <NormalButton
          onClick={() => setDarkMode(!darkMode)}
          bgColor="var(--looks-main-40)"
        >
          {darkMode ? "☀" : "🌙"}
        </NormalButton>
      </div>
    </div>
  );
};

export default Navigation;