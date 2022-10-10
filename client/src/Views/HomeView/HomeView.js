import React from "react";
import "./HomeView.scss";
import GesamtScore from "../../Components/GesamtScore/GesamtScore.js";
import TagesScore from "../../Components/TagesScore/TagesScore.js";
import Ranking from "../../Components/Ranking/Ranking.js";
import HeaderNavigation from "../../Components/HeaderNavigation/HeaderNavigation.js";
function HomeView() {
  return (
    <div className="homeview">
      <HeaderNavigation />
      <div className="homeview-score">
        <GesamtScore />
        <TagesScore />
        <Ranking />
      </div>
    </div>
  );
}

export default HomeView;
