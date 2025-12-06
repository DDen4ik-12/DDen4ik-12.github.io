import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "../../components/navigation/navigation.jsx";
import Footer from "../../components/footer/footer.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";
import Button3dIcon from "../../components/button3dIcon/button3dIcon.jsx";

import * as styles from "../../main.css";
import helloSplash from "/assets/helloSplash.svg";
import windowIcon from "/assets/window.svg";
import dashMascotDashy from "/assets/dashMascotDashy.svg";

const App = () => {
  return (
    <>
      <Navigation>
        <CircAnimPlaceholder text="Главная страница" />
      </Navigation>
      <div className={styles.content}>
        <BlockAndImg imgSrc={helloSplash} imgWidth="45%">
          <h1>Добро пожаловать!</h1>
          <div>Это сайт, принадлежащий чуваку под никнеймом Денчик-12 (англ. - Den4ik-12)</div>
          <div>Я создатель нескольких юзерскриптов, небольших игр и соавтор Dash - модификации Scratch</div>
          <div>Сейчас Вы находитесь на <a className={styles.link} href="/">главной странице сайта</a></div>
        </BlockAndImg>
        <h1>Категории:</h1>
        <div className={styles.grid}>
          <Button3dIcon
            imgSrc={windowIcon}
            text="Личные проекты"
            href="/projects"
            bgColor=""
            borderColor=""
          />
          <Button3dIcon
            imgSrc={dashMascotDashy}
            text="Dash"
            href="https://dashblocks.github.io"
            bgColor="#ff8f4d"
            borderColor="#b96838"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);