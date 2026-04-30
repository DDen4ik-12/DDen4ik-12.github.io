import React from "react";
import { Localized, useLocalization } from "@fluent/react";
import useLayout from "../../layout.jsx";
import { mainProjects } from "../projects/projectsDescs.js";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BgImg from "../../components/bgImg/bgImg.jsx";
import NormalButton from "../../components/normalButton/normalButton.jsx";
import Button3dIcon from "../../components/button3dIcon/button3dIcon.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./index.css";
import banner from "./banner.svg";
import windowIcon from "/assets/window.svg";
import dashLogo from "/assets/dashLogoMini.svg";

function StartBlock() {
  return (
    <BgImg imgSrc={banner}>
      <Localized
        id="page-index_start-block_1"
        elems={{
          nameGradient: <span className={styles.nameGradient} />,
          ogName: <span className={styles.ogName} />,
        }}
      >
        <h1 className={mainStyles.font3Rem} />
      </Localized>
      <Localized
        id="page-index_start-block_2"
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
      className={styles.buttonThumb}
      style={{ "--color": props.color }}
    >
      {props.imgSrc && <img src={props.imgSrc} />}
    </div>
  );
}

function ProjectDesc(props) {
  return <>{props.name}</>;
}

const githubStatsEmbedUrl =
  "https://v0-git-hub-streak-score-card-phi.vercel.app/api/card-with-avatar" +
    "?username=DDen4ik-12&theme=%7B%22backgroundColor%22%3A%22%230f172a%22%2C%22textColor%22%3A%22%23e2e8f0%22%2C%22accentColor%22%3A%22%230ea5e9%22%2C%22borderColor%22%3A%22%231e293b%22%2C%22waterColor%22%3A%22%230ea5e9%22%2C%22streakColor%22%3A%22%2306b6d4%22%7D";
const skills = {
  html: ["HTML", "#e34f26", require("!../../utils/recolorSvgLoader!./html.svg").default],
  css: ["CSS", "#663399", require("!../../utils/recolorSvgLoader!./css.svg").default],
  js: ["JavaScript", "#c4b017", require("!../../utils/recolorSvgLoader!./js.svg").default],
  react: ["React", "#61dafb", require("!../../utils/recolorSvgLoader!./react.svg").default],
  py: ["Python", "#3776ab", require("!../../utils/recolorSvgLoader!./py.svg").default],
};
const futureSkills = {
  cpp: ["C++", "#00599c"],
  godot: ["Godot Engine", "#478cbf", require("./godot.svg")],
};

function Content(props) {
  return (
    <>
      <div className={styles.grid}>
        <div className={mainStyles.section}>
          <Localized id="page-index_sections_projects">
            <h2 />
          </Localized>
          {mainProjects.map((project, i) => (
            <NormalButton
              key={i}
              glassStyle="dark"
              href={project.link}
              download={project.download}
              bgColor={project.bgColor}
            >
              <ProjectThumb
                color={project.bgColor}
                imgSrc={project.img}
              />
              <Localized
                id={project.descId}
                attrs={{ name: true }}
              >
                <ProjectDesc />
              </Localized>
            </NormalButton>
          ))}
          <Localized
            id="page-index_sections_projects_more"
            attrs={{ text: true }}
          >
            <Button3dIcon imgSrc={windowIcon} href={props.websiteLink("/projects")} />
          </Localized>
        </div>
        <div className={mainStyles.section}>
          <Localized id="page-index_sections_skills">
            <h2 />
          </Localized>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([key, [name, color, img]]) => (
              <div
                key={key}
                className={styles.skill}
                style={{ "--color": color }}
              >
                {img && (
                  typeof img == "function"
                    ? <img src={img(color)} />
                    : <img src={img} />
                )}
                {name}
              </div>
            ))}
          </div>
          <Localized id="page-index_sections_future-skills">
            <h2 />
          </Localized>
          <div className={styles.skillsGrid}>
            {Object.entries(futureSkills).map(([key, [name, color, img]]) => (
              <div
                key={key}
                className={styles.skill}
                style={{ "--color": color }}
              >
                {img && (
                  typeof img == "function"
                    ? <img src={img(color)} />
                    : <img src={img} />
                )}
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className={mainStyles.section}>
          <Localized id="page-index_sections_github-stats">
            <h2 />
          </Localized>
          <img className={styles.githubStatsEmbed} src={githubStatsEmbedUrl} />
        </div>
      </div>
    </>
  );
};

useLayout(
  <CircAnimPlaceholder />,
  StartBlock,
  Content,
  "page-index_name"
);