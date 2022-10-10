import React from "react";
import "./HomeView.scss";
import GesamtScore from "../../Components/GesamtScore/GesamtScore.js";
import TagesScore from "../../Components/TagesScore/TagesScore.js";
import Ranking from "../../Components/Ranking/Ranking.js";
import HeaderNavigation from "../../Components/HeaderNavigation/HeaderNavigation.js";
import Dailies from "../../Components/Dailies/Dailies.js";
import Weeklies from "../../Components/Weeklies/Weeklies.js";

function HomeView() {
  return (
    <div className="homeview">
      <HeaderNavigation />
      <div className="homeview-score">
        <GesamtScore />
        <TagesScore />
        <Ranking />
      </div>
      <Dailies />
      <Weeklies />
    </div>
  );
}

export default HomeView;
