import React, { useEffect, useState } from "react";

import breath from "../Dailies/img/breath.svg";
import reset from "../Dailies/img/reset.svg";
import Breathing from "../Breathing/Breathing";

import axios from "axios";
import "./Breath.scss";

function Breath(props) {
  const [breathing, setBreathing] = useState(false);

  useEffect(() => {
    if (
      document
        .querySelector(".dailies-app-check-breath")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeBreath(true);
    }
  }, [props.checkMadeBreath]);

  const handleBleibDran = () => {
    props.setBreathPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    setBreathing(true);
  };
  const handleDone = () => {
    document.querySelector(".dailies-app-breath").classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-breath")
      .classList.add("check-is-check");

    props.setBreathPop(false);
    props.setCheckMadeBreath(true);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 2,
          daily: "breath",
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
      .querySelector(".dailies-app-breath")
      .classList.remove("app-is-check");
    document
      .querySelector(".dailies-app-check-breath")
      .classList.remove("check-is-check");

    props.setBreathPop(false);
    setBreathing(false);

    axios
      .post(
        "http://localhost:5000/posts/reset/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 0,
          daily: "breath",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setCheckMadeBreath(false);
        props.setReload(!props.reload);
      });
  };

  return props.trigger ? (
    <div>
      {!props.checkMadeBreath ? (
        <div>
          {!breathing ? (
            <div className="breath">
              <div className="breath-inner">
                <img src={breath} alt="" className="breath-inner-image" />
                <h1 className="breath-inner-title">ATMEN</h1>
                <h3 className="breath-inner-sub">
                  Zeit für 5 Minuten Achtsamkeit
                </h3>
                <p className="breath-inner-text">
                  Konzentriere Dich mindestens 5 Minuten nur auf Deine Atmung.
                  Nutze dafür die angeleitete Atmung der SHC App und wähle “Los
                  geht’s”.
                </p>
                <p className="breath-inner-text">
                  Wenn Du Deine Atmung bereits mit einer anderen Übung/App
                  erledigt hast, wähle “Schon erledigt”.
                </p>
                <p className="breath-inner-text">
                  Für das Absolvieren einer Atmemübung erhältst Du 2 Punkte.
                </p>
                <button
                  className="breath-inner-button-agree agree-button"
                  onClick={handleAgree}
                >
                  LOS GEHTS
                </button>
                <button
                  className="nourish-inner-button-almost almost-button"
                  onClick={handleDone}
                >
                  SCHON ERLEDIGT
                </button>
                <button
                  className="breath-inner-button-cancel cancel-button"
                  onClick={handleBleibDran}
                >
                  Abbrechen
                </button>
              </div>
            </div>
          ) : (
            <Breathing props={props} setBreathing={setBreathing} />
          )}
        </div>
      ) : (
        <div className="breath">
          <div className="breath-inner">
            <img
              src={reset}
              alt=""
              className="breath-inner-image reset-image"
            />
            <h1 className="breath-inner-title">PUNKTE WIDERRUFEN</h1>
            <h3 className="breath-inner-sub">
              Hier kannst du deine Punkte zurücksetzen.
            </h3>
            <p className="breath-inner-text">
              Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
            </p>
            <button
              className="breath-inner-button-agree agree-button"
              onClick={handleReset}
            >
              PUNKTE WIDERRUFEN
            </button>

            <button
              className="breath-inner-button-cancel cancel-button"
              onClick={() => props.setBreathPop(false)}
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}

      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Breath;
