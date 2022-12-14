import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRemainingTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimer";
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
import Breath from "../Breath/Breath";
import Gratitude from "../Gratitude/Gratitude";

import BleibDran from "../BleibDran/BleibDran";
import Erfolg from "../Erfolg/Erfolg";
import CountdownHome from "../Countdown/CountdownHome";

function Dailies(props) {
  const [nourishPop, setNourishPop] = useState(false);
  const [trainingPop, setTrainingPop] = useState(false);
  const [sleepPop, setSleepPop] = useState(false);
  const [showerPop, setShowerPop] = useState(false);
  const [breathPop, setBreathPop] = useState(false);
  const [gratitudePop, setGratitudePop] = useState(false);

  const [bleibDran, setBleibDran] = useState(false);
  const [erfolg, setErfolg] = useState(false);
  const [dailiesData, setDailiesData] = useState({});
  const [currentDay, setCurrentDay] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const [checkMadeNourish, setCheckMadeNourish] = useState(false);
  const [checkMadeTraining, setCheckMadeTraining] = useState(false);
  const [checkMadeSleep, setCheckMadeSleep] = useState(false);
  const [checkMadeShower, setCheckMadeShower] = useState(false);

  const [checkMadeBreath, setCheckMadeBreath] = useState(false);
  const [checkMadeGratitude, setCheckMadeGratitude] = useState(false);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));
    let currentHabit = [
      "nourish",
      "training",
      "sleep",
      "shower",
      "breath",
      "gratitude",
    ];

    setCurrentUser(login.email);
    let countdown = getRemainingTimeUntilMsTimestamp(1667602800000);
    let days = "day" + (28 - parseInt(countdown.days, 10));
    setCurrentDay(days);

    axios
      .post("http://localhost:5000/posts/get/dailies", {
        email: login.email,
      })
      .then((response) => {
        setDailiesData(response.data.user);

        let res;
        let habit;

        for (let a = 0; a <= currentHabit.length - 1; a++) {
          habit = currentHabit[a];

          if (response.data.user.dailies != undefined) {
            res = response.data.user.dailies;

            if (res[habit] != undefined) {
              res = res[habit][days];

              if (res) {
                document
                  .querySelector(".dailies-app-" + habit)
                  .classList.add("app-is-check");

                document
                  .querySelector(".dailies-app-check-" + habit)
                  .classList.add("check-is-check");

                if (habit == "nourish") {
                  setCheckMadeNourish(true);
                } else if (habit == "training") {
                  setCheckMadeTraining(true);
                } else if (habit == "sleep") {
                  setCheckMadeSleep(true);
                } else if (habit == "shower") {
                  setCheckMadeShower(true);
                } else if (habit == "breath") {
                  setCheckMadeBreath(true);
                } else if (habit == "gratitude") {
                  setCheckMadeGratitude(true);
                } else {
                }
              }
            } else {
            }
          } else {
          }
        }
      });
  }, [currentDay]);

  return (
    <div className="dailies">
      <Nourish
        trigger={nourishPop}
        setNourishPop={setNourishPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeNourish={setCheckMadeNourish}
        checkMadeNourish={checkMadeNourish}
        reload={props.reload}
        setReload={props.setReload}
      />
      <Training
        trigger={trainingPop}
        setTrainingPop={setTrainingPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeTraining={setCheckMadeTraining}
        checkMadeTraining={checkMadeTraining}
        reload={props.reload}
        setReload={props.setReload}
      />
      <Sleep
        trigger={sleepPop}
        setSleepPop={setSleepPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeSleep={setCheckMadeSleep}
        checkMadeSleep={checkMadeSleep}
        reload={props.reload}
        setReload={props.setReload}
      />
      <Shower
        trigger={showerPop}
        setShowerPop={setShowerPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeShower={setCheckMadeShower}
        checkMadeShower={checkMadeShower}
        reload={props.reload}
        setReload={props.setReload}
      />
      <Breath
        trigger={breathPop}
        setBreathPop={setBreathPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeBreath={setCheckMadeBreath}
        checkMadeBreath={checkMadeBreath}
        reload={props.reload}
        setReload={props.setReload}
      />
      <Gratitude
        trigger={gratitudePop}
        setGratitudePop={setGratitudePop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeGratitude={setCheckMadeGratitude}
        checkMadeGratitude={checkMadeGratitude}
        reload={props.reload}
        setReload={props.setReload}
      />

      <BleibDran triggerBleibDran={bleibDran} setBleibDran={setBleibDran} />
      <Erfolg triggerErfolg={erfolg} setErfolg={setErfolg} />
      <h2 className="dailies-title">HABIT TRACKING</h2>
      <div className="dailies-tracking">
        <CountdownHome
          className="dailies-tracking-time"
          countdownTimestampMs={1668790800000}
        ></CountdownHome>
        <p className="dailies-tracking-text">LEFT TO TRACK YOUR</p>
        <p className="dailies-tracking-title">DAILIES</p>
      </div>

      <div className="dailies-app">
        <div
          className={`dailies-apps dailies-app-nourish ${
            checkMadeNourish ? "app-is-check" : ""
          }`}
          onClick={() => setNourishPop(true)}
        >
          <img
            src={check}
            alt=""
            className={`dailies-app-check dailies-app-check-nourish ${
              checkMadeNourish ? "check-is-check" : ""
            }`}
          />
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
          <img
            src={check}
            alt=""
            className="dailies-app-check dailies-app-check-sleep"
          />
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
          <img
            src={check}
            alt=""
            className="dailies-app-check dailies-app-check-shower"
          />
          <img
            src={shower}
            alt=""
            className="dailies-app-icon dailies-app-icon-shower"
          />
        </div>
        <div
          className="dailies-apps dailies-app-breath"
          onClick={() => setBreathPop(true)}
        >
          <img
            src={check}
            alt=""
            className="dailies-app-check  dailies-app-check-breath"
          />
          <img
            src={breath}
            alt=""
            className="dailies-app-icon dailies-app-icon-breath"
          />
        </div>
        <div
          className="dailies-apps dailies-app-gratitude"
          onClick={() => setGratitudePop(true)}
        >
          <img
            src={check}
            alt=""
            className="dailies-app-check dailies-app-check-gratitude"
          />
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
