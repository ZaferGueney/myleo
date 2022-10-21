import React, { useEffect, useState } from "react";
import "./Nature.scss";
import nature from "../Weeklies/img/nature.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";

function Nature(props) {
  const [log, setLog] = useState({ points: 0, minutes: 0 });
  const [currentMinutes, setCurrentMinutes] = useState(0);

  useEffect(() => {
    if (
      document
        .querySelector(".weeklies-app-check-nature")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeNature(true);
    } else {
    }

    // if (props.weekliesData.weeklies.nature[props.currentWeek].minutes > 5) {
    //   setCurrentMinutes(props.weekliesData.nature[props.currentWeek].minutes);
    // }

    setCurrentMinutes(props.weekliesData);
    props.setDiagramValue("0,6");
  }, [props.checkMadeNature]);

  const handleBleibDran = () => {
    props.setNaturePop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    let value_log = (100 / 120) * log.minutes;

    props.setDiagramValue("" + (value_log * 6) / 100 + ",6");
    // DEBUGG HERE!!!!
    if (log.minutes < 120) {
      axios
        .post(
          "http://localhost:5000/posts/add/nature/minutes",
          {
            email: props.currentUser,
            week: props.currentWeek,
            minutes: log.minutes,
            weeklies: "nature",
            log: log,
          }
          // { responseType: "blob" }
        )
        .then((response) => {
          props.setWeekliesData(response.data.user);
          props.setReloadLeaderboard(!props.reloadLeaderboard);
          console.log(response);
        });
      props.setNaturePop(false);
    } else {
      document
        .querySelector(".weeklies-app-nature")
        .classList.add("app-is-check");
      document
        .querySelector(".weeklies-app-check-nature")
        .classList.add("check-is-check");

      props.setNaturePop(false);
      props.setCheckMadeNature(true);

      addToDB();
    }

    // setCurrentMinutes(parseInt(e));

    // props.setMinutesPercent(parseInt(e));
  };

  const addToDB = () => {
    axios
      .post(
        "http://localhost:5000/posts/add/nature/minutes",
        {
          email: props.currentUser,
          week: props.currentWeek,
          points: log.points,
          weeklies: "nature",
          log: log,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);

        props.setReloadLeaderboard(!props.reloadLeaderboard);
      });
  };

  const handleReset = () => {
    props.setDiagramValue("" + (0 * 6) / 100 + ",6");
    document
      .querySelector(".weeklies-app-nature")
      .classList.remove("app-is-check");
    document
      .querySelector(".weeklies-app-check-nature")
      .classList.remove("check-is-check");

    props.setNaturePop(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/weeklies",
        {
          email: props.currentUser,
          week: props.currentWeek,
          points: 0,
          weeklies: "nature",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);
        props.setCheckMadeNature(false);
        props.setReloadLeaderboard(!props.reloadLeaderboard);
      });
  };

  const minutesFunc = (e) => {
    setLog((existingValues) => ({
      ...existingValues,
      minutes: parseInt(e),
      points: 0,
    }));

    setCurrentMinutes(parseInt(e));

    props.setMinutesPercent(parseInt(e));

    if (parseInt(e) >= 24 && parseInt(e) < 48) {
      setLog((existingValues) => ({
        ...existingValues,
        points: 1,
      }));
      addToDB();
    } else if (parseInt(e) >= 48 && parseInt(e) < 72) {
      setLog((existingValues) => ({
        ...existingValues,
        points: 2,
      }));
      addToDB();
    } else if (parseInt(e) >= 72 && parseInt(e) < 96) {
      setLog((existingValues) => ({
        ...existingValues,
        points: 3,
      }));
      addToDB();
    } else if (parseInt(e) >= 96 && parseInt(e) < 120) {
      setLog((existingValues) => ({
        ...existingValues,
        points: 4,
      }));
      addToDB();
    } else if (parseInt(e) >= 120) {
      setLog((existingValues) => ({
        ...existingValues,
        points: 5,
      }));
      addToDB();
    }
  };

  return props.trigger ? (
    <div className="nature">
      {!props.checkMadeNature ? (
        <div className="nature-inner">
          <img src={nature} alt="" className="nature-inner-image" />
          <h1 className="nature-inner-title">NATUR</h1>
          <h3 className="nature-inner-sub">Warst Du heute in der Natur?</h3>
          <p className="nature-inner-text">
            Wenn Du heute richtig “grün” gesehen hast, trage Deine Naturminuten
            hier ein.
            <br />
            <br /> Sammle bis zum Ende der Woche insgesamt 120 Minuten in der
            Natur und erhalte dafür 5 Punkte.
          </p>
          <div className="nature-inner-input">
            <input
              onChange={(e) => minutesFunc(e.target.value)}
              className="nature-inner-input-input"
              type="number"
              value={props.minutesPercent || ""}
            />
            <p className="nature-inner-input-text">Minuten</p>
          </div>
          <button
            className="nature-inner-button-agree agree-button"
            onClick={handleAgree}
          >
            FERTIG
          </button>

          <button
            className="nature-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="nature-inner">
          <img src={reset} alt="" className="nature-inner-image reset-image" />
          <h1 className="nature-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="nature-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="nature-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="nature-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="nature-inner-button-cancel cancel-button"
            onClick={() => props.setNaturePop(false)}
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

export default Nature;
