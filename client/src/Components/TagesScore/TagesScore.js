import React from "react";
import "./TagesScore.scss";
import crown from "./img/crown.svg";

function TagesScore() {
  return (
    <div className="tagesscore">
      <svg viewBox="0 0 36 36" className="tagesscore-chart">
        <path
          className="tagesscore-circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="tagesscore-circle"
          strokeDasharray="25, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <div className="tagesscore-content">
        {/* <img src={crown} alt="" className="tagesscore-crown" /> */}
        <p className="tagesscore-rate">25</p>
        <p className="tagesscore-percent">%</p>
      </div>

      <div className="tagesscore-footer">
        <h3 className="tagesscore-footer-title">TAGESSCORE</h3>
        <p className="tagesscore-footer-text">7 von 12 Pkt.</p>
      </div>

      <div className="tagesscore-circle-bg-2"></div>
    </div>
  );
}

export default TagesScore;
