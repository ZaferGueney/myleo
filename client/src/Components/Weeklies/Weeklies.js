import React from "react";

import "./Weeklies.scss";
import check from "./img/check.svg";
import workshop from "./img/workshop.svg";
import action from "./img/action.svg";
import nature from "./img/nature.svg";
import reflection from "./img/reflection.svg";

function Weeklies() {
  return (
    <div className="weeklies">
      <div className="weeklies-tracking">
        <p className="weeklies-tracking-time">15:30:17</p>
        <p className="weeklies-tracking-text">LEFT TO TRACK YOUR</p>
        <p className="weeklies-tracking-title">WEEKLIES</p>
      </div>

      <div className="weeklies-app">
        <div className="weeklies-apps weeklies-app-workshop">
          <img src={check} alt="" className="weeklies-app-check" />
          <img
            src={workshop}
            alt=""
            className="weeklies-app-icon weeklies-app-icon-workshop"
          />
        </div>
        <div className="weeklies-apps weeklies-app-action">
          <img
            src={check}
            alt=""
            className="weeklies-app-check weeklies-app-check-action"
          />
          <img
            src={action}
            alt=""
            className="weeklies-app-icon weeklies-app-icon-action"
          />
        </div>
        <div className="weeklies-apps weeklies-app-nature">
          <img
            src={check}
            alt=""
            className="weeklies-app-check weeklies-app-check-nature"
          />
          <img
            src={nature}
            alt=""
            className="weeklies-app-icon weeklies-app-icon-nature"
          />
          <svg viewBox="0 0 6 6" className="weeklies-app-icon-chart">
            <path
              className="weeklies-app-icon-score"
              strokeDasharray="3, 6"
              d=" M 0,5.5 h 6 "
            />

            {/* (prozentwert*6)/100 */}
          </svg>
        </div>
        <div className="weeklies-apps weeklies-app-reflection">
          <img src={check} alt="" className="weeklies-app-check" />
          <img
            src={reflection}
            alt=""
            className="weeklies-app-icon weeklies-app-icon-reflection"
          />
        </div>
      </div>
    </div>
  );
}

export default Weeklies;
