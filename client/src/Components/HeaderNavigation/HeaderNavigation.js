import React from "react";

import "./HeaderNavigation.scss";
import burger from "./img/burger.svg";
import arrow from "./img/arrow.svg";
import logo from "./img/logo.svg";
import profile from "./img/profile.svg";

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <img src={profile} alt="" className="header-navigation-profile" />
      <img src={logo} alt="" className="header-navigation-logo" />
      <img src={arrow} alt="" className="header-navigation-arrow" />
      <img src={burger} alt="" className="header-navigation-burger" />
      <p className="header-navigation-date">MONTAG, 11. JANUAR 2022</p>
      <div className="header-navigation-days">
        <img src={arrow} alt="" className="header-navigation-arrow-2" />
        <p className="header-navigation-days-title">TAG 3 VON 38</p>
      </div>
    </div>
  );
}

export default HeaderNavigation;
