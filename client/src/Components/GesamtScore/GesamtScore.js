import React from "react";
import "./GesamtScore.scss";
import crown from "./img/crown.svg";

function GesamtScore() {
  return (
    <div className="gesamtscore">
      <svg viewBox="0 0 36 36" class="gesamtscore-chart">
        <path
          class="gesamtscore-circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="gesamtscore-circle"
          stroke-dasharray="90, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <div className="gesamtscore-content">
        <img src={crown} alt="" className="gesamtscore-crown" />
        <p className="gesamtscore-rate">93</p>
        <p className="gesamtscore-percent">%</p>
      </div>

      <div className="gesamtscore-footer">
        <h3 className="gesamtscore-footer-title">GESAMTSCORE</h3>
        <p className="gesamtscore-footer-text">Mach weiter so!</p>
      </div>
    </div>
  );
}

export default GesamtScore;
