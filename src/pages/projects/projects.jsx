import React from "react";
import ReactDOM from "react-dom/client";
import { scratchProjects, otherProjects } from "./projectsDescs.js";
import Navigation from "../../components/navigation/navigation.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import Footer from "../../components/footer/footer.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import BigButton from "../../components/bigButton/bigButton.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./projects.css";
import scratchProjectsSplash from "/assets/scratchProjectsSplash.svg";
import projectsSplash from "/assets/projectsSplash.svg";
import gamepadIcon from "/assets/gamepad.svg";

const App = () => {
  return (
    <>
      <Navigation>
        <CircAnimPlaceholder text="Личные проекты" />
      </Navigation>
      <div className={mainStyles.content}>
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
              <h1>{project.name}</h1>
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
              <h1>{project.name}</h1>
              <div>{project.desc}</div>
            </BigButton>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);