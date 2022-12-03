import React from "react";
import "./Footer.css";

import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="social-media">
        <a href="https://github.com/nimakarimi76" target="_blank">
          <img src={Github} />
        </a>
        <a href="https://www.instagram.com/nima.__.karimi/" target="_blank">
          <img src={Instagram} />
        </a>
        <a href="https://www.linkedin.com/in/nimakarimi97/" target="_blank">
          <img src={Linkedin} />
        </a>
      </div>

      <div className="footer-logo">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default Footer;
