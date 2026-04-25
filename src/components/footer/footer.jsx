import React from "react";
import { Localized } from "@fluent/react";
import classNames from "../../utils/classNames.js";

import * as styles from "./footer.css";
import siteLogo from "/assets/siteLogo.svg";
import scratchLogo from "./scratchLogo.svg";
import githubLogo from "./githubLogo.svg";
import telegramLogo from "./telegramLogo.svg";
import dashLogo from "/assets/dashLogoMini.svg";

function FooterButton(props) {
  const main = (
    <div
      className={styles.buttonMain}
      role="button"
      title={props.title}
      style={{
        "--hover-bg-color": props.bgColor,
      }}
    >
      <img
        className={classNames(styles.buttonImg, props.imgClassName)}
        src={props.imgSrc}
      />
    </div>
  );
  return props.href == undefined ? main : (
    <a href={props.href}>
      {main}
    </a>
  );
};
function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img className={styles.logo} src={siteLogo} />
        <Localized id="website-name">
          <></>
        </Localized>
      </div>
      <div>
        <Localized
          id="footer_socials_scratch"
          attrs={{ title: true }}
        >
          <FooterButton
            imgSrc={scratchLogo}
            href="https://scratch.mit.edu/users/Den4ik-12"
            bgColor="#f8aa36"
          />
        </Localized>
        <Localized
          id="footer_socials_github"
          attrs={{ title: true }}
        >
          <FooterButton
            imgClassName={styles.iconWhite}
            imgSrc={githubLogo}
            href="https://github.com/DDen4ik-12"
            bgColor="#b3b3b3"
          />
        </Localized>
        <Localized
          id="footer_socials_telegram"
          attrs={{ title: true }}
        >
          <FooterButton
            imgClassName={styles.iconWhite}
            imgSrc={telegramLogo}
            href="https://t.me/d_den4ik_12_base"
            bgColor="#26a5e4"
          />
        </Localized>
        <Localized
          id="footer_socials_dash"
          attrs={{ title: true }}
        >
          <FooterButton
            imgClassName={styles.iconWhite}
            imgSrc={dashLogo}
            href="https://dashblocks.github.io/user#Den4ik-12"
            bgColor="#ff8f4d"
          />
        </Localized>
      </div>
    </footer>
  );
};

export default Footer;