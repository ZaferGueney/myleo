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
// import Workshop from "../Workshop/Workshop";
// import Action from "../Action/Action";
// import Nature from "../Nature/Nature";
// import Reflection from "../Reflection/Reflection";

import BleibDran from "../BleibDran/BleibDran";
import Erfolg from "../Erfolg/Erfolg";

function Dailies() {
  const [nourishPop, setNourishPop] = useState(false);
  const [trainingPop, setTrainingPop] = useState(false);
  const [sleepPop, setSleepPop] = useState(false);
  const [showerPop, setShowerPop] = useState(false);
  const [breathPop, setBreathPop] = useState(false);
  const [gratitudePop, setGratitudePop] = useState(false);
  const [workshopPop, setWorkshopPop] = useState(false);
  const [actionPop, setActionPop] = useState(false);
  const [naturePop, setNaturePop] = useState(false);
  const [reflectionPop, setReflectionPop] = useState(false);

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
  // const [checkMadeWorkshop, setCheckMadeWorkshop] = useState(false);
  // const [checkMadeAction, setCheckMadeAction] = useState(false);
  // const [checkMadeNature, setCheckMadeNature] = useState(false);
  // const [checkMadeReflection, setCheckMadeReflection] = useState(false);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));
    let currentHabit = [
      "nourish",
      "training",
      "sleep",
      "shower",
      "breath",
      "gratitude",
      // "workshop",
      // "action",
      // "nature",
      // "reflection",
    ];

    setCurrentUser(login.email);
    let countdown = getRemainingTimeUntilMsTimestamp(1667602800000);
    let days = "day" + (28 - parseInt(countdown.days, 10));
    setCurrentDay(days);

    axios
      .post(
        "http://localhost:5000/posts/get/dailies",
        {
          email: login.email,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        setDailiesData(response.data.user);

        let res;
        let habit;

        for (let a = 0; a <= currentHabit.length - 1; a++) {
          habit = currentHabit[a];

          // console.log(habit);
          // console.log(response.data.user.dailies);

          if (response.data.user.dailies != undefined) {
            res = response.data.user.dailies;

            if (res[habit] != undefined) {
              res = res[habit][days];

              if (res > 0) {
                console.log(habit + " INCLUDES " + res);
                document
                  .querySelector(".dailies-app-" + habit)
                  .classList.add("app-is-check");

                document
                  .querySelector(".dailies-app-check-" + habit)
                  .classList.add("check-is-check");

                // setCheckMadeNourish(true);
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
                  // } else if (habit == "workshop") {
                  //   setCheckMadeWorkshop(true);
                  // } else if (habit == "action") {
                  //   setCheckMadeAction(true);
                  // } else if (habit == "nature") {
                  //   setCheckMadeNature(true);
                  // } else if (habit == "reflection") {
                  //   setCheckMadeReflection(true);
                } else {
                }
              }
            } else {
              console.log(habit + "- NOT HERE");
            }
          } else {
            console.log("NO DAILIES IN SET!");
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
      />
      {/* <Workshop
        trigger={workshopPop}
        setWorkshopPop={setWorkshopPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeWorkshop={setCheckMadeWorkshop}
        checkMadeWorkshop={checkMadeWorkshop}
      /> */}

      {/* <Action
        trigger={actionPop}
        setActionPop={setActionPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeAction={setCheckMadeAction}
        checkMadeAction={checkMadeAction}
      /> */}

      {/* <Nature
        trigger={naturePop}
        setNaturePop={setNaturePop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeNature={setCheckMadeNature}
        checkMadeNature={checkMadeNature}
      /> */}

      {/* <Reflection
        trigger={reflectionPop}
        setReflectionPop={setReflectionPop}
        triggerBleibDran={bleibDran}
        setBleibDran={setBleibDran}
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        dailiesData={dailiesData}
        setDailiesData={setDailiesData}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckMadeReflection={setCheckMadeReflection}
        checkMadeReflection={checkMadeReflection}
      /> */}

      <BleibDran triggerBleibDran={bleibDran} setBleibDran={setBleibDran} />
      <Erfolg triggerErfolg={erfolg} setErfolg={setErfolg} />
      <h2 className="dailies-title">HABIT TRACKING</h2>
      <div className="dailies-tracking">
        <p className="dailies-tracking-time">15:30:17</p>
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
