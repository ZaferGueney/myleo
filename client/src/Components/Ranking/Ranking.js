import React from "react";
import "./Ranking.scss";
import crown from "./img/crown.svg";

function Ranking() {
  return (
    <div className="ranking">
      <svg viewBox="0 0 36 36" className="ranking-chart">
        <path
          className="ranking-circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="ranking-circle"
          strokeDasharray="45, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <div className="ranking-content">
        {/* <img src={crown} alt="" className="ranking-crown" /> */}
        <p className="ranking-rate">13.</p>
        <p className="ranking-percent">Platz</p>
      </div>

      <div className="ranking-footer">
        <h3 className="ranking-footer-title">RANKING</h3>
        <p className="ranking-footer-text">17 Teilnehmer vor dir</p>
      </div>
      <div className="ranking-circle-bg-2"></div>
    </div>
  );
}

export default Ranking;
