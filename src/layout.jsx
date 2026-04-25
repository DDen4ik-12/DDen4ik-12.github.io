import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import { useLocalization } from "@fluent/react";
import { ThemeProviderHOC } from "./components/themeProviderHOC/themeProviderHOC.jsx";
import { L10nProviderHOC, L10nProviderCtx } from "./components/l10nProviderHOC.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import Footer from "./components/footer/footer.jsx";

import * as styles from "./main.css";

function Layout(props) {
  const { l10n } = useLocalization();
  const { currentLocales } = useContext(L10nProviderCtx);
  const StartBlock = props.startBlock;

  useEffect(() => {
    document.title = l10n.getString("website-title", {
      pageName: l10n.getString(props.pageNameId),
    });
  }, [currentLocales]);

  return (
    <>
      <Navigation websiteLink={props.websiteLink}>
        {props.placeholder}
      </Navigation>
      <StartBlock websiteLink={props.websiteLink} />
      <div className={styles.content}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
const WrappedLayout = ThemeProviderHOC(L10nProviderHOC(Layout));

const applyRandColMode = () => {
  const looksMainHue = Math.floor(Math.random() * 360);
  const looksMainSat = Math.floor(Math.random() * 101);
  const linkHue = Math.floor(Math.random() * 360);

  const style = document.createElement("style");
  style.textContent =
    `:root {
      --default-looks-main-30: hsl(${looksMainHue}deg ${looksMainSat}% 30%);
      --default-looks-main-40: hsl(${looksMainHue}deg ${looksMainSat}% 40%);
      --default-looks-main-50: hsl(${looksMainHue}deg ${looksMainSat}% 50%);
      --default-looks-main-60: hsl(${looksMainHue}deg ${looksMainSat}% 60%);
      --default-looks-main-70: hsl(${looksMainHue}deg ${looksMainSat}% 70%);
      --default-link-15: hsl(${linkHue}deg 100% 15%);
      --default-link-40: hsl(${linkHue}deg 100% 40%);
      --default-link-50: hsl(${linkHue}deg 100% 50%);
      --default-link-60: hsl(${linkHue}deg 100% 60%);
      --default-link-90: hsl(${linkHue}deg 100% 90%);
    }`;
  document.head.appendChild(style);

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  metaThemeColor.content = `hsl(${looksMainHue}deg ${looksMainSat}% 50%)`;
};

export default (placeholder, StartBlock, Content, pageNameId) => {
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
      startBlock={StartBlock}
      websiteLink={websiteLink}
      pageNameId={pageNameId}
    >
      <Content websiteLink={websiteLink} />
    </WrappedLayout>
  );
};