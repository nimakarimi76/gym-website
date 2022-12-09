import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  let isMobile = window.innerWidth < 768 ? true : false;
  const [openMenu, setOpenMenu] = useState(false);

  const showMobileMenu = () => {
    if (isMobile)
      return (
        <img
          onClick={() => setOpenMenu((prev) => !prev)}
          className="bars"
          src={Bars}
          alt="hamburger menu"
        />
      );
  };

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {showMobileMenu()}
      {isMobile && !openMenu ? null : (
        <ul
          className="header-menu"
          style={{ display: openMenu || !isMobile ? "flex" : "none" }}
        >
          <li onClick={() => setOpenMenu(false)}>Home</li>
          <li onClick={() => setOpenMenu(false)}>Programs</li>
          <li onClick={() => setOpenMenu(false)}>Why us</li>
          <li onClick={() => setOpenMenu(false)}>Plans</li>
          <li onClick={() => setOpenMenu(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
