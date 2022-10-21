import React, { useEffect } from "react";
import "./Sleep.scss";
import sleep from "../Dailies/img/sleep.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";

function Sleep(props) {
  useEffect(() => {
    if (
      document
        .querySelector(".dailies-app-check-sleep")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeSleep(true);
    }
  }, [props.checkMadeSleep]);

  const handleBleibDran = () => {
    props.setSleepPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document.querySelector(".dailies-app-sleep").classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-sleep")
      .classList.add("check-is-check");

    props.setSleepPop(false);
    props.setCheckMadeSleep(true);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 3,
          daily: "sleep",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setReload(!props.reload);
      });
  };

  const handleReset = () => {
    document
      .querySelector(".dailies-app-sleep")
      .classList.remove("app-is-check");
    document
      .querySelector(".dailies-app-check-sleep")
      .classList.remove("check-is-check");

    props.setSleepPop(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 0,
          daily: "sleep",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setCheckMadeSleep(false);
        props.setReload(!props.reload);
      });
  };

  return props.trigger ? (
    <div className="sleep">
      {!props.checkMadeSleep ? (
        <div className="sleep-inner">
          <img src={sleep} alt="" className="sleep-inner-image" />
          <h1 className="sleep-inner-title">SCHLAF</h1>
          <h3 className="sleep-inner-sub">
            Hast Du heute mindestens 7 Stunden geschlafen?
          </h3>
          <p className="sleep-inner-text">
            Wenn Du letzte Nacht 7 oder mehr Stunden Schlaf hattest, wähle “JA”
            und Du erhältst dafür 3 Punkte.
          </p>
          <button
            className="sleep-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            JA
          </button>

          <button
            className="sleep-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="sleep-inner">
          <img src={reset} alt="" className="sleep-inner-image reset-image" />
          <h1 className="sleep-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="sleep-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="sleep-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="sleep-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="sleep-inner-button-cancel cancel-button"
            onClick={() => props.setSleepPop(false)}
          >
            Abbrechen
          </button>
        </div>
      )}
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Sleep;
