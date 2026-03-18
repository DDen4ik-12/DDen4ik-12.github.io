import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useLocalization } from "@fluent/react";
import { L10nProviderHOC } from "./components/l10nProviderHOC.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import Footer from "./components/footer/footer.jsx";

import * as styles from "./main.css";

function Layout(props) {
  const { l10n } = useLocalization();

  useEffect(() => {
    document.title = l10n.getString("website-title", {
      pageName: l10n.getString(props.pageNameId),
    });
  }, [props.currentLocales]);

  return (
    <>
      <Navigation
        websiteLink={props.websiteLink}
        changeLocales={props.changeLocales}
        currentLocales={props.currentLocales}
      >
        {props.placeholder}
      </Navigation>
      <div className={styles.content}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
const WrappedLayout = L10nProviderHOC(Layout);

const applyRandColMode = () => {
  const looksMainHue = Math.floor(Math.random() * 360);
  const looksMainSat = Math.floor(Math.random() * 101);
  const linkHue = Math.floor(Math.random() * 360);

  const style = document.createElement("style");
  style.textContent =
    `html {
      --looks-main-15: hsl(${looksMainHue}deg ${looksMainSat}% 15%);
      --looks-main-20: hsl(${looksMainHue}deg ${looksMainSat}% 20%);
      --looks-main-30: hsl(${looksMainHue}deg ${looksMainSat}% 30%);
      --looks-main-40: hsl(${looksMainHue}deg ${looksMainSat}% 40%);
      --looks-main-50: hsl(${looksMainHue}deg ${looksMainSat}% 50%);
      --looks-main-60: hsl(${looksMainHue}deg ${looksMainSat}% 60%);
      --looks-main-70: hsl(${looksMainHue}deg ${looksMainSat}% 70%);
      --looks-main-80: hsl(${looksMainHue}deg ${looksMainSat}% 80%);
      --looks-main-90: hsl(${looksMainHue}deg ${looksMainSat}% 90%);
      --link-40: hsl(${linkHue}deg 100% 40%);
      --link-50: hsl(${linkHue}deg 100% 50%);
      --link-90: hsl(${linkHue}deg 100% 90%);
    }`;
  document.head.appendChild(style);

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  metaThemeColor.content = `hsl(${looksMainHue}deg ${looksMainSat}% 50%)`;
};

export default (placeholder, Content, pageNameId) => {
  const randColMode =
    ((new URL(location.href)).searchParams.get("randCol") ?? undefined) != undefined;
  const websiteLink = (ogLink) => {
    const url = ogLink.startsWith("/")
      ? new URL(`${location.origin}${ogLink}`)
      : new URL(ogLink);
    if (randColMode) url.searchParams.append("randCol", "");
    return url.href;
  };
  if (randColMode) applyRandColMode();

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <WrappedLayout
      placeholder={placeholder}
      websiteLink={websiteLink}
      pageNameId={pageNameId}
    >
      <Content mainStyles={styles} websiteLink={websiteLink} />
    </WrappedLayout>
  );
};