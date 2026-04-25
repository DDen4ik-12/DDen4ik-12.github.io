import React, { useEffect, useState, createContext } from "react";
import classNames from "../../utils/classNames.js";

import * as themes from "./themes.css";

const ThemeProviderCtx = createContext(null);

const prefersDarkMode = matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;
const savedThemeKey = "theme";
let savedTheme = {
  darkMode: prefersDarkMode,
};
try {
  const result = {...JSON.parse(localStorage.getItem(savedThemeKey))};
  Object.assign(savedTheme, {
    darkMode: result.darkMode ?? false,
  });
} catch {}

function ThemeProviderHOC(Content) {
  function ThemeProvider (props) {
    const changeTheme = () => {
      localStorage.setItem(savedThemeKey, JSON.stringify({
        darkMode,
      }));
      document.documentElement.className = classNames({
        [themes.lightMode]: !darkMode,
        [themes.darkMode]: darkMode,
      });
    };

    let [darkMode, setDarkMode] = useState(savedTheme.darkMode);

    useEffect(changeTheme, [darkMode]);

    return (
      <ThemeProviderCtx value={{ darkMode, setDarkMode }}>
        <Content {...props} />
      </ThemeProviderCtx>
    );
  };
  return ThemeProvider;
};

export { ThemeProviderHOC, ThemeProviderCtx };