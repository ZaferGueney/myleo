import React from "react";
import "./HomeView.scss";
import GesamtScore from "../../Components/GesamtScore/GesamtScore.js";
import TagesScore from "../../Components/TagesScore/TagesScore.js";
import Ranking from "../../Components/Ranking/Ranking.js";
import HeaderNavigation from "../../Components/HeaderNavigation/HeaderNavigation.js";
import Dailies from "../../Components/Dailies/Dailies.js";
import Weeklies from "../../Components/Weeklies/Weeklies.js";
import Blog from "../../Components/Blog/Blog.js";
import GratitudeLog from "../../Components/GratitudeLog/GratitudeLog.js";
import Footer from "../../Components/Footer/Footer.js";
import FooterNavigation from "../../Components/FooterNavigation/FooterNavigation.js";

function HomeView() {
  return (
    <div className="homeview">
      <HeaderNavigation />
      <div className="homeview-background">
        <div className="homeview-score">
          <GesamtScore />
          <TagesScore />
          <Ranking />
        </div>
        <Dailies />
        <Weeklies />
      </div>
      <Blog />
      <GratitudeLog />
      <Footer />
      <FooterNavigation />
    </div>
  );
}

export default HomeView;
