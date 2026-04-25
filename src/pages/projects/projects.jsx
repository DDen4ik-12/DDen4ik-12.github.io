import React from "react";
import { Localized } from "@fluent/react";
import useLayout from "../../layout.jsx";
import {
  mainProjects,
  scratchProjects,
  dashExtensions,
  userscripts,
  otherProjects,
} from "./projectsDescs.js";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BgImg from "../../components/bgImg/bgImg.jsx";
import NormalButton from "../../components/normalButton/normalButton.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./projects.css";
import banner from "./banner.svg";
import gamepadIcon from "/assets/gamepad.svg";

function StartBlock() {
  return (
    <BgImg imgSrc={banner} imgPosY="center">
      <Localized
        id="page-projects_start-block_1"
      >
        <h1 className={mainStyles.font3Rem} />
      </Localized>
      <Localized
        id="page-projects_start-block_2"
        elems={{ h3: <h3 /> }}
      >
        <></>
      </Localized>
    </BgImg>
  );
}

function ProjectThumb(props) {
  return (
    <div
      className={mainStyles.cardThumb}
      style={{ "--color": props.color }}
    >
      {props.imgSrc && <img src={props.imgSrc} />}
    </div>
  );
}

function ProjectDesc(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <div>{props.desc}</div>
    </>
  );
}

function Content(props) {
  return (
    <>
      <Localized id="page-projects_main-projects">
        <h1 />
      </Localized>
      <div className={mainStyles.scrollableList}>
        {mainProjects.map((project, i) => (
          <div key={i} className={mainStyles.card}>
            <ProjectThumb
              color={project.bgColor}
              imgSrc={project.img}
            />
            <Localized
              id={project.descId}
              attrs={{ name: true, desc: true }}
            >
              <ProjectDesc />
            </Localized>
            <Localized id={project.buttonId}>
              <NormalButton
                linkClassName={mainStyles.cardButtonLink}
                className={mainStyles.cardButton}
                glassStyle="dark"
                href={project.link}
                download={project.download}
                bgColor={project.bgColor}
              />
            </Localized>
          </div>
        ))}
      </div>
      <Localized id="page-projects_scratch-projects">
        <h1 />
      </Localized>
      <div className={mainStyles.scrollableList}>
        {scratchProjects.map((project, i) => (
          <div key={i} className={mainStyles.card}>
            <ProjectThumb
              color={project.bgColor}
              imgSrc={gamepadIcon}
            />
            <Localized
              id={project.descId}
              attrs={{ name: true, desc: true }}
            >
              <ProjectDesc />
            </Localized>
            <Localized id="button_play">
              <NormalButton
                linkClassName={mainStyles.cardButtonLink}
                className={mainStyles.cardButton}
                glassStyle="dark"
                href={`https://scratch.mit.edu/projects/${project.id}`}
                download={project.download}
                bgColor={project.bgColor}
              />
            </Localized>
          </div>
        ))}
      </div>
      <Localized id="page-projects_dash-extensions">
        <h1 />
      </Localized>
      <div className={mainStyles.scrollableList}>
        {dashExtensions.map((project, i) => (
          <div key={i} className={mainStyles.card}>
            <ProjectThumb
              color={project.bgColor}
              imgSrc={project.img}
            />
            <Localized
              id={project.descId}
              attrs={{ name: true, desc: true }}
            >
              <ProjectDesc />
            </Localized>
            <Localized id="button_try-out">
              <NormalButton
                linkClassName={mainStyles.cardButtonLink}
                className={mainStyles.cardButton}
                glassStyle="dark"
                href={
                  "https://dashblocks.github.io/editor.html" +
                    `?extension=https://dashblocks.github.io/extensions/static/extensions/${project.extLink}`
                }
                download={project.download}
                bgColor={project.bgColor}
              />
            </Localized>
          </div>
        ))}
      </div>
      <Localized id="page-projects_userscripts">
        <h1 />
      </Localized>
      <div className={mainStyles.scrollableList}>
        {userscripts.map((project, i) => (
          <div key={i} className={mainStyles.card}>
            <ProjectThumb
              color={project.bgColor}
              imgSrc={project.img}
            />
            <Localized
              id={project.descId}
              attrs={{ name: true, desc: true }}
            >
              <ProjectDesc />
            </Localized>
            <Localized id={project.buttonId}>
              <NormalButton
                linkClassName={mainStyles.cardButtonLink}
                className={mainStyles.cardButton}
                glassStyle="dark"
                href={project.link}
                download={project.download}
                bgColor={project.bgColor}
              />
            </Localized>
          </div>
        ))}
      </div>
      {/*
      <Localized id="page-projects_other-projects">
        <h1 />
      </Localized>
      <div className={mainStyles.scrollableList}>
        {otherProjects.map((project, i) => (
          <BigButton
            key={i}
            imgSrc={project.img}
            href={project.link}
            download={project.download}
            bgColor={project.bgColor}
            borderColor={project.borderColor}
          >
            <Localized
              id={project.descId}
              attrs={{ name: true, desc: true }}
            >
              <ProjectDesc />
            </Localized>
          </BigButton>
        ))}
      </div>
      */}
    </>
  );
};

useLayout(
  <CircAnimPlaceholder />,
  StartBlock,
  Content,
  "page-projects_name"
);