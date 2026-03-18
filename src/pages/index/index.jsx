import React from "react";
import { Localized } from "@fluent/react";
import useLayout from "../../layout.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import Button3dIcon from "../../components/button3dIcon/button3dIcon.jsx";

import * as styles from "../../main.css";
import helloSplash from "/assets/helloSplash.svg";
import windowIcon from "/assets/window.svg";
import dashLogo from "/assets/dashLogoMini.svg";

function Content(props) {
  return (
    <>
      <BlockAndImg imgSrc={helloSplash} imgWidth="45%">
        <Localized
          id="page-index_welcome-block_1"
          elems={{ h1: <h1 />, div: <div /> }}
        >
          <></>
        </Localized>
        <Localized
          id="page-index_welcome-block_2"
          elems={{
            indexPageLink: <a className={styles.link} href={props.websiteLink("/")} />,
          }}
        >
          <div />
        </Localized>
      </BlockAndImg>
      <Localized id="page-index_categories">
        <h1 />
      </Localized>
      <div className={styles.grid}>
        <Localized
          id="page-projects_nav-placeholder"
          attrs={{ text: true }}
        >
          <Button3dIcon imgSrc={windowIcon} href={props.websiteLink("/projects")} />
        </Localized>
        <Localized
          id="page-index_categories_button-dash"
          attrs={{ text: true }}
        >
          <Button3dIcon
            imgSrc={dashLogo}
            href="https://dashblocks.github.io"
            bgColor="#ff8f4d"
            borderColor="#b96838"
          />
        </Localized>
      </div>
    </>
  );
};

useLayout(
  <Localized
    id="page-index_nav-placeholder"
    attrs={{ text: true }}
  >
    <CircAnimPlaceholder />
  </Localized>,
  Content,
  "page-index_name"
);