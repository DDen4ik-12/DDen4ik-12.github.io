import React, { useEffect, useState, createContext } from "react";
import { FluentBundle, FluentResource } from "@fluent/bundle";
import { negotiateLanguages } from "@fluent/langneg";
import { LocalizationProvider, ReactLocalization } from "@fluent/react";

const savedLocaleKey = "lang";
const defaultLocale = "en-US";
const allLocales = {
  "en-US": ["English (USA)", new FluentResource(require("/locales/en-US.ftl").default)],
  ru: ["Русский", new FluentResource(require("/locales/ru.ftl").default)],
};
function* generateBundles(locales) {
  for (const locale of locales) {
    const bundle = new FluentBundle(locale, { useIsolating: false });
    bundle.addResource(allLocales[locale][1]);
    yield bundle;
  }
}

const L10nProviderCtx = createContext(null);

const savedLocale = localStorage.getItem(savedLocaleKey);

function L10nProviderHOC(Content) {
  function L10nProvider (props) {
    const changeLocales = (userLocales, saveLocale) => {
      const newLocales = negotiateLanguages(
        userLocales,
        Object.keys(allLocales),
        { defaultLocale },
      );
      if (saveLocale) {
        localStorage.setItem(savedLocaleKey, newLocales[0]);
      }
      document.documentElement.lang = newLocales[0];
      setCurrentLocales(newLocales);
      setL10n(new ReactLocalization(generateBundles(newLocales)));
    };

    let [currentLocales, setCurrentLocales] = useState([defaultLocale]);
    let [l10n, setL10n] = useState(null);

    useEffect(() => changeLocales(
      savedLocale ? [savedLocale] : navigator.languages,
      false
    ), []);

    if (l10n == null) return <div>Loading...</div>;
    return (
      <LocalizationProvider l10n={l10n}>
        <L10nProviderCtx value={{ changeLocales, currentLocales }}>
          <Content {...props} />
        </L10nProviderCtx>
      </LocalizationProvider>
    );
  };
  return L10nProvider;
};

export { allLocales, L10nProviderHOC, L10nProviderCtx };