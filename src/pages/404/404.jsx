import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "../../components/navigation/navigation.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import Footer from "../../components/footer/footer.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./404.css";
import error404Splash from "/assets/error404Splash.svg";

const App = () => {
  return (
    <>
      <Navigation>
        <CircAnimPlaceholder text="Ошибка 404" />
      </Navigation>
      <div className={mainStyles.content}>
        <BlockAndImg imgSrc={error404Splash} imgWidth="45%">
          <h1>*Пустота*</h1>
          <div>Было бы прекрасно здесь что-нибудь увидеть (кроме ошибки 404), однако страницы по данному URL не существует!</div>
          <div>Так что возращайтесь на <a className={mainStyles.link} href="/">главную страницу сайта</a></div>
        </BlockAndImg>
      </div>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);