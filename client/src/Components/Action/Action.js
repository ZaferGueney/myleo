import React, { useEffect, useState } from "react";
import "./Action.scss";
import action from "../Weeklies/img/action.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";

function Action(props) {
  useEffect(() => {
    if (
      document
        .querySelector(".weeklies-app-check-action")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeAction(true);
    }
  }, [props.checkMadeAction]);

  const handleBleibDran = () => {
    props.setActionPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document
      .querySelector(".weeklies-app-action")
      .classList.add("app-is-check");
    document
      .querySelector(".weeklies-app-check-action")
      .classList.add("check-is-check");

    props.setActionPop(false);
    props.setCheckMadeAction(true);

    axios
      .post(
        "http://localhost:5000/posts/add/weeklies",
        {
          email: props.currentUser,
          week: props.currentWeek,
          points: 10,
          weeklies: "action",
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
      .querySelector(".weeklies-app-action")
      .classList.remove("app-is-check");
    document
      .querySelector(".weeklies-app-check-action")
      .classList.remove("check-is-check");

    props.setActionPop(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/weeklies",
        {
          email: props.currentUser,
          week: props.currentWeek,
          points: 0,
          weeklies: "action",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);
        props.setCheckMadeAction(false);

        props.setReloadLeaderboard(!props.reloadLeaderboard);
      });
  };

  return props.trigger ? (
    <div className="action">
      {!props.checkMadeAction ? (
        <div className="action-inner">
          <img src={action} alt="" className="action-inner-image" />
          <h1 className="action-inner-title">ACTION</h1>
          <h3 className="action-inner-sub">Fermentiere ein Lebensmittel</h3>
          <p className="action-inner-text">
            Dass fermentierte Lebensmittel eine Wohltat für Deinen Darm und
            Immunsystem sind, weißt Du sicher. Diese Woche sollst Du daher ein
            Lebensmittel SELBER fermentieren. Egal ob Joghurt, Kefir, Gurken
            oder Sauerkraut - ab in die Küche. <br />
            <br />
            Für ein paar Rezeptideen und Links schau Dir folgenden Artikel an:{" "}
            <br />
            <br />
            https://library.schweinehundchallenge.de/actionaufgabe-f ermentieren
            <br />
            <br />
            Hast Du die Aufgabe erledigt? Dann wähle “JA” und Du erhältst 5
            Punkte.
          </p>
          <button
            className="action-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            JA
          </button>

          <button
            className="action-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="action-inner">
          <img src={reset} alt="" className="action-inner-image reset-image" />
          <h1 className="action-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="action-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="action-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="action-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="action-inner-button-cancel cancel-button"
            onClick={() => props.setActionPop(false)}
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

export default Action;
