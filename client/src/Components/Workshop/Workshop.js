import React, { useEffect, useState } from "react";
import "./Workshop.scss";
import workshop from "../Weeklies/img/workshop.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";

function Workshop(props) {
  useEffect(() => {
    if (
      document
        .querySelector(".weeklies-app-check-workshop")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeWorkshop(true);
    }
  }, [props.checkMadeWorkshop]);

  const handleBleibDran = () => {
    props.setWorkshopPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document
      .querySelector(".weeklies-app-workshop")
      .classList.add("app-is-check");
    document
      .querySelector(".weeklies-app-check-workshop")
      .classList.add("check-is-check");

    props.setWorkshopPop(false);
    props.setCheckMadeWorkshop(true);

    axios
      .post(
        "http://localhost:5000/posts/add/weeklies",
        {
          email: props.currentUser,
          week: props.currentWeek,
          points: 10,
          weeklies: "workshop",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);

        props.setReloadLeaderboard(!props.reloadLeaderboard);
      });
  };

  const handleReset = () => {
    document
      .querySelector(".weeklies-app-workshop")
      .classList.remove("app-is-check");
    document
      .querySelector(".weeklies-app-check-workshop")
      .classList.remove("check-is-check");

    props.setWorkshopPop(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/weeklies",
        {
          email: props.currentUser,
          week: props.currentWeek,
          points: 0,
          weeklies: "workshop",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);
        props.setCheckMadeWorkshop(false);

        props.setReloadLeaderboard(!props.reloadLeaderboard);
      });
  };

  return props.trigger ? (
    <div className="workshop">
      {!props.checkMadeWorkshop ? (
        <div className="workshop-inner">
          <img src={workshop} alt="" className="workshop-inner-image" />
          <h1 className="workshop-inner-title">WISSEN</h1>
          <h3 className="workshop-inner-sub">Stress-Management Vortrag</h3>
          <p className="workshop-inner-text">
            Am Montag, den 11.6.22 um 19:00 wird Jacob Drachenberg einen Online
            Zoom Workshop zum Thema Stress geben. <br />
            <br />
            Falls Du nicht live dabei sein kannst, hast Du ab dem Folgetag die
            Möglichkeit, die Aufzeichnung anzuschauen. <br />
            <br />
            Für die Teilnahme (oder das nachträgliche Anschauen) erhältst Du 10
            Punkte. <br />
            <br />
            <b>
              Um live teilzunehmen, am 11.6. um 19:00 per Zoom über folgenden
              Link einloggen:
            </b>
          </p>
          <button
            className="workshop-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            TEILNEHMEN
          </button>

          <button
            className="workshop-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="workshop-inner">
          <img
            src={reset}
            alt=""
            className="workshop-inner-image reset-image"
          />
          <h1 className="workshop-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="workshop-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="workshop-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="workshop-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="workshop-inner-button-cancel cancel-button"
            onClick={() => props.setWorkshopPop(false)}
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

export default Workshop;
