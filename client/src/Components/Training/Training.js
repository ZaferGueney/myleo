import React, { useEffect } from "react";
import "./Training.scss";
import training from "../Dailies/img/training.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";

function Training(props) {
  useEffect(() => {
    if (
      document
        .querySelector(".dailies-app-check-training")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeTraining(true);
    }
  }, [props.checkMadeTraining]);

  const handleBleibDran = () => {
    props.setTrainingPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document
      .querySelector(".dailies-app-training")
      .classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-training")
      .classList.add("check-is-check");

    props.setTrainingPop(false);
    props.setCheckMadeTraining(true);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 3,
          daily: "training",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);

        // console.log(response.data.user);
      });
  };

  const handleReset = () => {
    document
      .querySelector(".dailies-app-training")
      .classList.remove("app-is-check");
    document
      .querySelector(".dailies-app-check-training")
      .classList.remove("check-is-check");

    props.setTrainingPop(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 0,
          daily: "training",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setCheckMadeTraining(false);
      });
  };

  return props.trigger ? (
    <div className="training">
      {!props.checkMadeTraining ? (
        <div className="training-inner">
          <img src={training} alt="" className="training-inner-image" />
          <h1 className="training-inner-title">BEWEGUNG</h1>
          <h3 className="training-inner-sub">
            Hast Du Dich heute 15 Minuten sportlich betätigt?
          </h3>
          <p className="training-inner-text">
            Wenn Du Dich heute mindestens 15 Minuten mit Intention bewegt hast,
            wähle “JA” und Du erhältst 3 Punkte.
          </p>
          <button
            className="training-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            JA
          </button>

          <button
            className="training-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="training-inner">
          <img
            src={reset}
            alt=""
            className="training-inner-image reset-image"
          />
          <h1 className="training-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="training-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="training-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="training-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="training-inner-button-cancel cancel-button"
            onClick={() => props.setTrainingPop(false)}
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

export default Training;
