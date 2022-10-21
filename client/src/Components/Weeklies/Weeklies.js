import React, { useEffect, useState } from "react";
import axios from "axios";

import { getRemainingTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimer";
import "./Weeklies.scss";
import check from "./img/check.svg";
import workshop from "./img/workshop.svg";
import action from "./img/action.svg";
import nature from "./img/nature.svg";
import reflection from "./img/reflection.svg";
import Workshop from "../Workshop/Workshop";
import Action from "../Action/Action";

import BleibDran from "../BleibDran/BleibDran";
import CountdownHome from "../Countdown/CountdownHome";
import Nature from "../Nature/Nature";
import Reflection from "../Reflection/Reflection";

function Weeklies(props) {
  const [checkMadeWorkshop, setCheckMadeWorkshop] = useState(false);
  const [checkMadeAction, setCheckMadeAction] = useState(false);
  const [checkMadeNature, setCheckMadeNature] = useState(false);
  const [checkMadeReflection, setCheckMadeReflection] = useState(false);
  const [workshopPop, setWorkshopPop] = useState(false);
  const [actionPop, setActionPop] = useState(false);
  const [naturePop, setNaturePop] = useState(false);
  const [reflectionPop, setReflectionPop] = useState(false);
  const [bleibDran, setBleibDran] = useState(false);
  const [weekliesData, setWeekliesData] = useState({});
  const [currentWeek, setCurrentWeek] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [minutesPercent, setMinutesPercent] = useState(0);
  const [diagramValue, setDiagramValue] = useState("");

  const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
    weeks: "00",
  };

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));
    let currentHabit = ["workshop", "action", "nature", "reflection"];

    setCurrentUser(login.email);

    let countdown = getRemainingTimeUntilMsTimestamp(1668790800000);

    let weeks;

    if (countdown.weeks == "03") {
      weeks = "week01";
      setCurrentWeek(weeks);
    } else if (countdown.weeks == "02") {
      weeks = "week02";
      setCurrentWeek(weeks);
    } else if (countdown.weeks == "01") {
      weeks = "week03";
      setCurrentWeek(weeks);
    } else if (countdown.weeks == "04") {
      weeks = "week04";
      setCurrentWeek(weeks);
    } else {
    }

    axios
      .post(
        "http://localhost:5000/posts/get/weeklies",
        {
          email: login.email,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        setWeekliesData(response.data.user);
        if (response.data.user.hasOwnProperty("weeklies")) {
          if (response.data.user.weeklies.hasOwnProperty("nature")) {
            if (
              response.data.user.weeklies.nature.hasOwnProperty(currentWeek)
            ) {
              if (
                response.data.user.weeklies.nature[currentWeek].hasOwnProperty(
                  "minutes"
                )
              ) {
                let minutes_value =
                  response.data.user.weeklies.nature[currentWeek].minutes;

                if (minutes_value > 0) {
                  MinutesToPercent(minutes_value);

                  setMinutesPercent(minutes_value);
                }
              }
            }
          }
        }

        let res2;
        let habit;

        for (let a = 0; a <= currentHabit.length - 1; a++) {
          habit = currentHabit[a];

          if (response.data.user.weeklies != undefined) {
            res2 = response.data.user.weeklies;

            if (res2[habit] != undefined) {
              res2 = res2[habit][weeks];

              if (res2) {
                if (habit == "nature" && res2.minutes < 120) {
                  continue;
                }
                document
                  .querySelector(".weeklies-app-" + habit)
                  .classList.add("app-is-check");

                document
                  .querySelector(".weeklies-app-check-" + habit)
                  .classList.add("check-is-check");

                if (habit == "workshop") {
                  setCheckMadeWorkshop(true);
                } else if (habit == "action") {
                  setCheckMadeAction(true);
                } else if (habit == "nature") {
                  setCheckMadeNature(true);
                } else if (habit == "reflection") {
                  setCheckMadeReflection(true);
                } else {
                }
              }
            }
          }
        }
      });
  }, [currentWeek]);

  const MinutesToPercent = (value) => {
    let value_log = (100 / 120) * value;

    setDiagramValue("" + (value_log * 6) / 100 + ",6");
  };

  return (
    <div className="weeklies">
      <Workshop
        trigger={workshopPop}
        setWorkshopPop={setWorkshopPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
        weekliesData={weekliesData}
        setWeekliesData={setWeekliesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeWorkshop={setCheckMadeWorkshop}
        checkMadeWorkshop={checkMadeWorkshop}
        reload={props.reload}
        setReload={props.setReload}
        reloadLeaderboard={props.reloadLeaderboard}
        setReloadLeaderboard={props.setReloadLeaderboard}
      />

      <BleibDran triggerBleibDran={bleibDran} setBleibDran={setBleibDran} />
      <Action
        trigger={actionPop}
        setActionPop={setActionPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
        weekliesData={weekliesData}
        setWeekliesData={setWeekliesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeAction={setCheckMadeAction}
        checkMadeAction={checkMadeAction}
        reload={props.reload}
        setReload={props.setReload}
        reloadLeaderboard={props.reloadLeaderboard}
        setReloadLeaderboard={props.setReloadLeaderboard}
      />

      <Nature
        trigger={naturePop}
        setNaturePop={setNaturePop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
        weekliesData={weekliesData}
        setWeekliesData={setWeekliesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeNature={setCheckMadeNature}
        checkMadeNature={checkMadeNature}
        setMinutesPercent={setMinutesPercent}
        minutesPercent={minutesPercent}
        setDiagramValue={setDiagramValue}
        diagramValue={diagramValue}
        reload={props.reload}
        setReload={props.setReload}
        reloadLeaderboard={props.reloadLeaderboard}
        setReloadLeaderboard={props.setReloadLeaderboard}
      />

      <Reflection
        trigger={reflectionPop}
        setReflectionPop={setReflectionPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
        weekliesData={weekliesData}
        setWeekliesData={setWeekliesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeReflection={setCheckMadeReflection}
        checkMadeReflection={checkMadeReflection}
        reload={props.reload}
        setReload={props.setReload}
        reloadLeaderboard={props.reloadLeaderboard}
        setReloadLeaderboard={props.setReloadLeaderboard}
      />

      <div className="weeklies-tracking">
        <CountdownHome
          className="weeklies-tracking-time"
          countdownTimestampMs={1668790800000}
        ></CountdownHome>

        <p className="weeklies-tracking-text">LEFT TO TRACK YOUR</p>
        <p className="weeklies-tracking-title">WEEKLIES</p>
      </div>

      <div className="weeklies-app">
        <div
          className="weeklies-apps weeklies-app-workshop"
          onClick={() => setWorkshopPop(true)}
        >
          <img
            src={check}
            alt=""
            className="weeklies-app-check weeklies-app-check-workshop"
          />
          <img
            src={workshop}
            alt=""
            className="weeklies-app-icon weeklies-app-icon-workshop"
          />
        </div>
        <div
          className="weeklies-apps weeklies-app-action"
          onClick={() => setActionPop(true)}
        >
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
        <div
          className="weeklies-apps weeklies-app-nature"
          onClick={() => setNaturePop(true)}
        >
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
              strokeDasharray={diagramValue}
              d=" M 0,5.5 h 6 "
            />

            {/* (prozentwert*6)/100 */}
          </svg>
        </div>
        <div
          className="weeklies-apps weeklies-app-reflection"
          onClick={() => setReflectionPop(true)}
        >
          <img
            src={check}
            alt=""
            className="weeklies-app-check weeklies-app-check-reflection"
          />
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
