import React, { useEffect, useState } from "react";
import "./Nourish.scss";
import nourish from "../Dailies/img/nourish.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";

function Nourish(props) {
  useEffect(() => {
    if (
      document
        .querySelector(".dailies-app-check-nourish")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeNourish(true);
    }
  }, [props.checkMadeNourish]);

  const handleBleibDran = () => {
    props.setNourishPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document
      .querySelector(".dailies-app-nourish")
      .classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-nourish")
      .classList.add("check-is-check");

    props.setNourishPop(false);
    props.setCheckMadeNourish(true);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 4,
          daily: "nourish",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setReload(!props.reload);
        // props.setReset(!props.reset);
      });
  };

  const handleAlmost = () => {
    document
      .querySelector(".dailies-app-nourish")
      .classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-nourish")
      .classList.add("check-is-check");

    props.setNourishPop(false);
    props.setCheckMadeNourish(true);
    // props.setErfolg(true);
    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 2,
          daily: "nourish",
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
      .querySelector(".dailies-app-nourish")
      .classList.remove("app-is-check");
    document
      .querySelector(".dailies-app-check-nourish")
      .classList.remove("check-is-check");

    props.setNourishPop(false);

    // props.setErfolg(true);
    axios
      .post(
        "http://localhost:5000/posts/reset/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 0,
          daily: "nourish",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setCheckMadeNourish(false);
        props.setReload(!props.reload);
      });
  };

  return props.trigger ? (
    <div className="nourish">
      {!props.checkMadeNourish ? (
        <div className="nourish-inner">
          <img src={nourish} alt="" className="nourish-inner-image" />
          <h1 className="nourish-inner-title">ERNÄHRUNG</h1>
          <h3 className="nourish-inner-sub">
            Hast du dich heute clean ernährt?
          </h3>
          <p className="nourish-inner-text">
            Wenn du dich an alle Ernährungsregeln gehalten hast, bekommst du 4
            Punkte.
          </p>
          <p className="nourish-inner-text">
            Hast Du 1 nicht-regelkonformes Lebensmittel oder Getränk verzehrt,
            erhältst Du 2 Punkte.
          </p>
          <button
            className="nourish-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            JA
          </button>
          <button
            className="nourish-inner-button-almost almost-button"
            onClick={handleAlmost}
          >
            FAST
          </button>

          <button
            className="nourish-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="nourish-inner">
          <img src={reset} alt="" className="nourish-inner-image reset-image" />
          <h1 className="nourish-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="nourish-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="nourish-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="nourish-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="nourish-inner-button-cancel cancel-button"
            onClick={() => props.setNourishPop(false)}
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

export default Nourish;
