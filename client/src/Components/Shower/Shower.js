import React, { useEffect } from "react";

import shower from "../Dailies/img/shower.svg";
import reset from "../Dailies/img/reset.svg";

import Workshop from "../Workshop/Workshop";
// import Action from "../Action/Action";
// import Nature from "../Nature/Nature";
// import Reflection from "../Reflection/Reflection";

import axios from "axios";
import "./Shower.scss";

function Shower(props) {
  useEffect(() => {
    if (
      document
        .querySelector(".dailies-app-check-shower")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeShower(true);
    }
  }, [props.checkMadeShower]);

  const handleBleibDran = () => {
    props.setShowerPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document.querySelector(".dailies-app-shower").classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-shower")
      .classList.add("check-is-check");

    props.setShowerPop(false);
    props.setCheckMadeShower(true);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 2,
          daily: "shower",
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
      .querySelector(".dailies-app-shower")
      .classList.remove("app-is-check");
    document
      .querySelector(".dailies-app-check-shower")
      .classList.remove("check-is-check");

    props.setShowerPop(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 0,
          daily: "shower",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setCheckMadeShower(false);
        props.setReload(!props.reload);
      });
  };

  return props.trigger ? (
    <div className="shower">
      {!props.checkMadeShower ? (
        <div className="shower-inner">
          <img src={shower} alt="" className="shower-inner-image" />
          <h1 className="shower-inner-title">HITZE & KÄLTE</h1>
          <h3 className="shower-inner-sub">
            Hast Du Dich heute extremer Hitze oder Kälte ausgesetzt?
          </h3>
          <p className="shower-inner-text">
            Für eine kalte Dusche, ein Eisbad oder einen Saunabesuch erhältst Du
            2 Punkte.
          </p>
          <button
            className="shower-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            JA
          </button>

          <button
            className="shower-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="shower-inner">
          <img src={reset} alt="" className="shower-inner-image reset-image" />
          <h1 className="shower-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="shower-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="shower-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="shower-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="shower-inner-button-cancel cancel-button"
            onClick={() => props.setShowerPop(false)}
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

export default Shower;
