import React, { useState } from "react";
import { Localized } from "@fluent/react";
import useLayout from "../../layout.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BgImg from "../../components/bgImg/bgImg.jsx";
import Button3dIcon from "../../components/button3dIcon/button3dIcon.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./404.css";
import banner from "../index/banner.svg";
import bulbIcon from "/assets/bulb.svg";

function StartBlock(props) {
  return (
    <BgImg imgSrc={banner}>
      <Localized
        id="page-404_start-block_1"
      >
        <h1 className={mainStyles.font3Rem} />
      </Localized>
      <Localized
        id="page-404_start-block_2"
        elems={{ h3: <h3 /> }}
      >
        <></>
      </Localized>
      <Localized
        id="page-404_start-block_3"
        elems={{
          indexPageLink: <a className={mainStyles.link} href={props.websiteLink("/")} />,
        }}
      >
        <h3 />
      </Localized>
    </BgImg>
  );
}

function Content(props) {
  let [clicks, setClicks] = useState(0);

  return (
    <>
      <Localized
        id="page-404_clicker-button"
        vars={{ clicks }}
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
  <CircAnimPlaceholder />,
  StartBlock,
  Content,
  "page-404_name"
);