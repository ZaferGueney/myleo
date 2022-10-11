import React from "react";
import "./FooterNavigation.scss";

import home from "./img/home.svg";
import analyse from "./img/analyse.svg";
import ranking from "./img/ranking.svg";
import team from "./img/team.svg";
import chat from "./img/chat.svg";

function FooterNavigation() {
  return (
    <div className="footer-navigation">
      <div className="footer-navigation-link">
        <img src={home} alt="" className="footer-navigation-link-image" />
        <p className="footer-navigation-link-title">Home</p>
      </div>
      <div className="footer-navigation-link">
        <img src={analyse} alt="" className="footer-navigation-link-image" />
        <p className="footer-navigation-link-title">Analyse</p>
      </div>
      <div className="footer-navigation-link">
        <img src={ranking} alt="" className="footer-navigation-link-image" />
        <p className="footer-navigation-link-title">Ranking</p>
      </div>
      <div className="footer-navigation-link">
        <img
          src={team}
          alt=""
          className="footer-navigation-link-image footer-navigation-link-image-team"
        />
        <p className="footer-navigation-link-title">Team</p>
      </div>
      <div className="footer-navigation-link">
        <img src={chat} alt="" className="footer-navigation-link-image" />
        <p className="footer-navigation-link-title">Chat</p>
      </div>
    </div>
  );
}

export default FooterNavigation;
