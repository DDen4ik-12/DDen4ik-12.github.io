import React, { useState } from "react";
import { Localized } from "@fluent/react";
import useLayout from "../../layout.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import Button3dIcon from "../../components/button3dIcon/button3dIcon.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./404.css";
import error404Splash from "/assets/error404Splash.svg";
import bulbIcon from "/assets/bulb.svg";

function Content(props) {
  let [clicks, setClicks] = useState(0);

  return (
    <>
      <BlockAndImg imgSrc={error404Splash} imgWidth="45%">
        <Localized
          id="page-404_error-block_1"
          elems={{ h1: <h1 />, div: <div /> }}
        >
          <></>
        </Localized>
        <Localized
          id="page-404_error-block_2"
          elems={{
            indexPageLink: <a className={mainStyles.link} href={props.websiteLink("/")} />,
          }}
        >
          <div />
        </Localized>
      </BlockAndImg>
      <Localized
        id="page-404_clicker-button"
        vars={{clicks}}
        attrs={{ text: true }}
      >
        <Button3dIcon
          imgSrc={bulbIcon}
          onClick={() => setClicks(clicks + 1)}
        />
      </Localized>
    </>
  );
};

useLayout(
  <Localized
    id="page-404_nav-placeholder"
    attrs={{ text: true }}
  >
    <CircAnimPlaceholder />
  </Localized>,
  Content,
  "page-404_name"
);