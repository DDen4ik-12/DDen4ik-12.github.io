import React, { useEffect, useState } from "react";
import { FluentBundle, FluentResource } from "@fluent/bundle";
import { negotiateLanguages } from "@fluent/langneg";
import { LocalizationProvider, ReactLocalization, Localized } from "@fluent/react";

import enUsLocale from "/locales/en-US.ftl";
import ruLocale from "/locales/ru.ftl";

const savedLocaleKey = "lang";
const defaultLocale = "en-US";
const allLocales = {
  "en-US": ["English (USA)", new FluentResource(enUsLocale)],
  ru: ["Русский", new FluentResource(ruLocale)],
};
function* generateBundles(locales) {
  for (const locale of locales) {
    const bundle = new FluentBundle(locale, { useIsolating: false });
    bundle.addResource(allLocales[locale][1]);
    yield bundle;
  }
}

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
        <Content
          changeLocales={changeLocales}
          currentLocales={currentLocales}
          {...props}
        />
      </LocalizationProvider>
    );
  };
  return L10nProvider;
};

export { allLocales, L10nProviderHOC };