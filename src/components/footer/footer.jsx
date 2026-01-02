import React from "react";

import * as styles from "./footer.css";
import siteLogo from "/assets/siteLogo.svg";
import scratchLogo from "./scratchLogo.svg";
import githubLogo from "./githubLogo.svg";
import telegramLogo from "./telegramLogo.svg";

const FooterButton = (props) => {
  const main = (
    <div
      className={styles.buttonMain}
      role="button"
      title={props.title}
      style={{
        "--hover-bg-color": props.bgColor,
        "--hover-border-color": props.borderColor
      }}
    >
      <img className={styles.buttonImg} src={props.imgSrc} />
    </div>
  );
  return props.href == undefined ? main : (
    <a href={props.href}>
      {main}
    </a>
  );
};
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img className={styles.logo} src={siteLogo} />
        Сайт Денчика-12
      </div>
      <div>
        <FooterButton
          imgSrc={scratchLogo}
          title="Я в Scratch"
          href="https://scratch.mit.edu/users/Den4ik-12"
          bgColor="#f8aa36"
          borderColor="#ad7626"
        />
        <FooterButton
          imgSrc={githubLogo}
          title="Я в GitHub"
          href="https://github.com/DDen4ik-12"
          bgColor="#b3b3b3"
          borderColor="#747474"
        />
        <FooterButton
          imgSrc={telegramLogo}
          title="Мой ТГК"
          href="https://t.me/d_den4ik_12_base"
          bgColor="#26a5e4"
          borderColor="#186a92"
        />
      </div>
    </footer>
  );
};

export default Footer;