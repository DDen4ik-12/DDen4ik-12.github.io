import React from "react";
import useLayout from "../../layout.jsx";
import { scratchProjects, otherProjects } from "./projectsDescs.js";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import BigButton from "../../components/bigButton/bigButton.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./projects.css";
import scratchProjectsSplash from "/assets/scratchProjectsSplash.svg";
import projectsSplash from "/assets/projectsSplash.svg";
import gamepadIcon from "/assets/gamepad.svg";

const Content = (props) => {
  return (
    <>
      <BlockAndImg imgSrc={scratchProjectsSplash} imgWidth="25%">
        <h1>Рекомендуемые мои Scratch-проекты:</h1>
      </BlockAndImg>
      <div className={mainStyles.scrollableList}>
        {scratchProjects.map((project) => (
          <BigButton
            imgSrc={gamepadIcon}
            href={`https://scratch.mit.edu/projects/${project.id}`}
            bgColor={project.bgColor}
            borderColor={project.borderColor}
          >
            <h2>{project.name}</h2>
            <div>{project.desc}</div>
          </BigButton>
        ))}
      </div>
      <BlockAndImg imgSrc={projectsSplash} imgWidth="25%" imgToRight={true}>
        <h1>Остальные проекты:</h1>
      </BlockAndImg>
      <div className={mainStyles.scrollableList}>
        {otherProjects.map((project) => (
          <BigButton
            imgSrc={project.img}
            href={project.link}
            download={project.download}
            bgColor={project.bgColor}
            borderColor={project.borderColor}
          >
            <h2>{project.name}</h2>
            <div>{project.desc}</div>
          </BigButton>
        ))}
      </div>
    </>
  );
};

useLayout(<CircAnimPlaceholder text="Личные проекты" />, Content);