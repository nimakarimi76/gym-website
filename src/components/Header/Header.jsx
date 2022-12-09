import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

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
          <li>
            <Link
              onClick={() => setOpenMenu(false)}
              to="hero"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpenMenu(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpenMenu(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpenMenu(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpenMenu(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
