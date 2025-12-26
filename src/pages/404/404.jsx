import React from "react";
import useLayout from "../../layout.jsx";
import CircAnimPlaceholder from "../../components/circAnimPlaceholder/circAnimPlaceholder.jsx";
import BlockAndImg from "../../components/blockAndImg/blockAndImg.jsx";

import * as mainStyles from "../../main.css";
import * as styles from "./404.css";
import error404Splash from "/assets/error404Splash.svg";

const Content = (props) => {
  return (
    <BlockAndImg imgSrc={error404Splash} imgWidth="45%">
      <h1>*Пустота*</h1>
      <div>Было бы прекрасно здесь что-нибудь увидеть (кроме ошибки 404), однако страницы по данному URL не существует!</div>
      <div>Так что возращайтесь на <a className={mainStyles.link} href={props.websiteLink("/")}>главную страницу сайта</a></div>
    </BlockAndImg>
  );
};

useLayout(<CircAnimPlaceholder text="Ошибка 404" />, Content);