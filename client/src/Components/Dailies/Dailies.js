import React from "react";

import "./Dailies.scss";
import nourish from "./img/nourish.svg";
import training from "./img/training.svg";
import sleep from "./img/sleep.svg";
import shower from "./img/shower.svg";
import breath from "./img/breath.svg";
import gratitude from "./img/gratitude.svg";
import check from "./img/check.svg";
function Dailies() {
  return (
    <div className="dailies">
      <div className="dailies-tracking">
        <p className="dailies-tracking-time">15:30:17</p>
        <p className="dailies-tracking-text">LEFT TO TRACK YOUR</p>
        <p className="dailies-tracking-title">DAILIES</p>
      </div>

      <div className="dailies-app">
        <div className="dailies-apps dailies-app-nourish">
          <img src={check} alt="" className="dailies-app-check" />
          <img
            src={nourish}
            alt=""
            className="dailies-app-icon dailies-app-icon-nourish"
          />
        </div>
        <div className="dailies-apps dailies-app-training">
          <img
            src={check}
            alt=""
            className="dailies-app-check dailies-app-check-training"
          />
          <img
            src={training}
            alt=""
            className="dailies-app-icon dailies-app-icon-training"
          />
        </div>
        <div className="dailies-apps dailies-app-sleep">
          <img src={check} alt="" className="dailies-app-check" />
          <img
            src={sleep}
            alt=""
            className="dailies-app-icon dailies-app-icon-sleep"
          />
        </div>
        <div className="dailies-apps dailies-app-shower">
          <img src={check} alt="" className="dailies-app-check" />
          <img
            src={shower}
            alt=""
            className="dailies-app-icon dailies-app-icon-shower"
          />
        </div>
        <div className="dailies-apps dailies-app-breath">
          <img src={check} alt="" className="dailies-app-check  " />
          <img
            src={breath}
            alt=""
            className="dailies-app-icon dailies-app-icon-breath"
          />
        </div>
        <div className="dailies-apps dailies-app-gratitude">
          <img src={check} alt="" className="dailies-app-check" />
          <img
            src={gratitude}
            alt=""
            className="dailies-app-icon dailies-app-icon-gratitude"
          />
        </div>
      </div>
    </div>
  );
}

export default Dailies;
