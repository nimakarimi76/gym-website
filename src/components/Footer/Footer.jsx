import React from "react";
import "./Footer.css";

import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="blur footer-blur-1" />
      <div className="blur footer-blur-2" />
      <hr />
      <div className="social-media">
        <a
          href="https://github.com/nimakarimi76"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="github" />
        </a>
        <a
          href="https://www.instagram.com/nima.__.karimi/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/nimakarimi97/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="linkedin" />
        </a>
      </div>

      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
