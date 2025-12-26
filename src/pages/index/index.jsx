import React from "react";
import useLayout from "../../layout.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import Button3dIcon from "../../components/button3dIcon/button3dIcon.jsx";

import * as styles from "../../main.css";
import helloSplash from "/assets/helloSplash.svg";
import windowIcon from "/assets/window.svg";
import dashMascotDashy from "/assets/dashMascotDashy.svg";

const Content = (props) => {
  return (
    <>
      <BlockAndImg imgSrc={helloSplash} imgWidth="45%">
        <h1>Добро пожаловать!</h1>
        <div>Это сайт, принадлежащий чуваку под никнеймом Денчик-12 (англ. - Den4ik-12)</div>
        <div>Я создатель нескольких юзерскриптов, небольших игр и соавтор Dash - модификации Scratch</div>
        <div>Сейчас Вы находитесь на <a className={styles.link} href={props.websiteLink("/")}>главной странице сайта</a></div>
      </BlockAndImg>
      <h1>Категории:</h1>
      <div className={styles.grid}>
        <Button3dIcon
          imgSrc={windowIcon}
          text="Личные проекты"
          href={props.websiteLink("/projects")}
        />
        <Button3dIcon
          imgSrc={dashMascotDashy}
          text="Dash"
          href="https://dashblocks.github.io"
          bgColor="#ff8f4d"
          borderColor="#b96838"
        />
      </div>
    </>
  );
};

useLayout(<CircAnimPlaceholder text="Главная страница" />, Content);