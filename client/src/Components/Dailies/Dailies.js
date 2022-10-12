import React, { useState } from "react";

import "./Dailies.scss";
import nourish from "./img/nourish.svg";
import training from "./img/training.svg";
import sleep from "./img/sleep.svg";
import shower from "./img/shower.svg";
import breath from "./img/breath.svg";
import gratitude from "./img/gratitude.svg";
import check from "./img/check.svg";

import Nourish from "../Nourish/Nourish";
import Training from "../Training/Training";
import Sleep from "../Sleep/Sleep";
import Shower from "../Shower/Shower";

import BleibDran from "../BleibDran/BleibDran";

function Dailies() {
  const [nourishPop, setNourishPop] = useState(false);
  const [trainingPop, setTrainingPop] = useState(false);
  const [sleepPop, setSleepPop] = useState(false);
  const [showerPop, setShowerPop] = useState(false);
  const [bleibDran, setBleibDran] = useState(false);

  return (
    <div className="dailies">
      <Nourish
        trigger={nourishPop}
        setNourishPop={setNourishPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
      />
      <Training trigger={trainingPop} setTrainingPop={setTrainingPop} />
      <Sleep trigger={sleepPop} setSleepPop={setSleepPop} />
      <Shower trigger={showerPop} setShowerPop={setShowerPop} />
      <BleibDran triggerBleibDran={bleibDran} setBleibDran={setBleibDran} />

      <h2 className="dailies-title">HABIT TRACKING</h2>
      <div className="dailies-tracking">
        <p className="dailies-tracking-time">15:30:17</p>
        <p className="dailies-tracking-text">LEFT TO TRACK YOUR</p>
        <p className="dailies-tracking-title">DAILIES</p>
      </div>

      <div className="dailies-app">
        <div
          className="dailies-apps dailies-app-nourish"
          onClick={() => setNourishPop(true)}
        >
          <img src={check} alt="" className="dailies-app-check" />
          <img
            src={nourish}
            alt=""
            className="dailies-app-icon dailies-app-icon-nourish"
          />
        </div>

        <div
          className="dailies-apps dailies-app-training"
          onClick={() => setTrainingPop(true)}
        >
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
        <div
          className="dailies-apps dailies-app-sleep"
          onClick={() => setSleepPop(true)}
        >
          <img src={check} alt="" className="dailies-app-check" />
          <img
            src={sleep}
            alt=""
            className="dailies-app-icon dailies-app-icon-sleep"
          />
        </div>
        <div
          className="dailies-apps dailies-app-shower"
          onClick={() => setShowerPop(true)}
        >
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
