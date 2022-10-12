import React from "react";

import "./GratitudeLog.scss";
import gratitude from "./img/gratitude.svg";
import date from "./img/date.svg";

function GratitudeLog() {
  return (
    <div className="gratitudelog">
      <div className="gratitudelog-header">
        <img src={gratitude} alt="" className="gratitudelog-header-image" />
        <h2 className="gratitudelog-header-title">Wofür du dankbar bist</h2>
      </div>

      <div className="gratitudelog-log">
        <div className="gratitudelog-log-single">
          <img src={date} alt="" className="gratitudelog-log-single-image" />
          <div className="gratitudelog-log-single-title">vor 20 Minuten</div>
          <p className="gratitudelog-log-single-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            consectetur.
          </p>
        </div>
        <div className="gratitudelog-log-single">
          <img src={date} alt="" className="gratitudelog-log-single-image" />
          <div className="gratitudelog-log-single-title">vor 20 Minuten</div>
          <p className="gratitudelog-log-single-text">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="gratitudelog-log-single">
          <img src={date} alt="" className="gratitudelog-log-single-image" />
          <div className="gratitudelog-log-single-title">vor 20 Minuten</div>
          <p className="gratitudelog-log-single-text">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <button className="gratitudelog-button">ALLE EINTRÄGE ANSEHEN</button>
    </div>
  );
}

export default GratitudeLog;
