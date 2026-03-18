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
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import BigButton from "../../components/bigButton/bigButton.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./projects.css";
import scratchProjectsSplash from "/assets/scratchProjectsSplash.svg";
import projectsSplash from "/assets/projectsSplash.svg";
import gamepadIcon from "/assets/gamepad.svg";

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
      <BlockAndImg imgSrc={projectsSplash} imgWidth="5rem">
        <Localized id="page-projects_main-projects">
          <h1 />
        </Localized>
      </BlockAndImg>
      <div className={mainStyles.scrollableList}>
        {mainProjects.map((project, i) => (
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
      <BlockAndImg imgSrc={scratchProjectsSplash} imgWidth="5rem" imgToRight={true}>
        <Localized id="page-projects_scratch-projects">
          <h1 />
        </Localized>
      </BlockAndImg>
      <div className={mainStyles.scrollableList}>
        {scratchProjects.map((project, i) => (
          <BigButton
            key={i}
            imgSrc={gamepadIcon}
            href={`https://scratch.mit.edu/projects/${project.id}`}
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
      <BlockAndImg imgSrc={projectsSplash} imgWidth="5rem">
        <Localized id="page-projects_dash-extensions">
          <h1 />
        </Localized>
      </BlockAndImg>
      <div className={mainStyles.scrollableList}>
        {dashExtensions.map((project, i) => (
          <BigButton
            key={i}
            imgSrc={project.img}
            href={
              "https://dashblocks.github.io/editor.html" +
              `?extension=https://dashblocks.github.io/extensions/static/extensions/${project.extLink}`
            }
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
      <BlockAndImg imgSrc={projectsSplash} imgWidth="5rem" imgToRight={true}>
        <Localized id="page-projects_userscripts">
          <h1 />
        </Localized>
      </BlockAndImg>
      <div className={mainStyles.scrollableList}>
        {userscripts.map((project, i) => (
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
      {/*
      <BlockAndImg imgSrc={projectsSplash} imgWidth="5rem">
        <Localized id="page-projects_other-projects">
          <h1 />
        </Localized>
      </BlockAndImg>
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
  <Localized
    id="page-projects_nav-placeholder"
    attrs={{ text: true }}
  >
    <CircAnimPlaceholder />
  </Localized>,
  Content,
  "page-projects_name"
);