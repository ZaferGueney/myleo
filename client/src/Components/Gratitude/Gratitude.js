import React, { useEffect, useState } from "react";

import gratitude from "../Dailies/img/gratitude.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";
import "./Gratitude.scss";

function Gratitude(props) {
  const [log, setLog] = useState({ first: "", second: "", third: "" });

  useEffect(() => {
    if (
      document
        .querySelector(".dailies-app-check-gratitude")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeGratitude(true);
    }
  }, [props.checkMadeGratitude]);

  const handleBleibDran = () => {
    props.setGratitudePop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document
      .querySelector(".dailies-app-gratitude")
      .classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-gratitude")
      .classList.add("check-is-check");

    props.setGratitudePop(false);
    props.setCheckMadeGratitude(true);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.currentUser,
          day: props.currentDay,
          points: 2,
          daily: "gratitude",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);

        // console.log(response.data.user);
      });

    axios
      .post(
        "http://localhost:5000/posts/add/gratitude-log",
        {
          email: props.currentUser,
          day: props.currentDay,
          log: log,
          daily: "gratitude",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);

        // console.log(response.data.user);
      });
  };

  const firstFunc = (e) => {
    setLog((existingValues) => ({
      ...existingValues,

      first: e.target.value,
    }));
  };

  const secondFunc = (e) => {
    setLog((existingValues) => ({
      ...existingValues,

      second: e.target.value,
    }));
  };

  const thirdFunc = (e) => {
    setLog((existingValues) => ({
      ...existingValues,

      third: e.target.value,
    }));
  };

  const handleReset = () => {
    document
      .querySelector(".dailies-app-gratitude")
      .classList.remove("app-is-check");
    document
      .querySelector(".dailies-app-check-gratitude")
      .classList.remove("check-is-check");

    props.setGratitudePop(false);

    axios
      .post(
        "http://localhost:5000/posts/add/gratitude-log",
        {
          email: props.currentUser,
          day: props.currentDay,
          log: 0,
          daily: "gratitude",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setDailiesData(response.data.user);
        props.setCheckMadeGratitude(false);
      });
  };

  return props.trigger ? (
    <div className="gratitude">
      {!props.checkMadeGratitude ? (
        <div className="gratitude-inner">
          <img src={gratitude} alt="" className="gratitude-inner-image" />
          <h1 className="gratitude-inner-title">DANKBARKEIT</h1>
          <h3 className="gratitude-inner-sub">Wofür bist Du heute dankbar?</h3>
          <p className="gratitude-inner-text">
            Notiere 3 Dinge, für die Du dankbar bist und Du erhältst 2 Punkte.
          </p>
          <form className="gratitude-inner-form" onSubmit={handleAgree}>
            <div className="gratitude-inner-form-group ">
              <input
                className="first"
                type="text"
                onChange={(e) => firstFunc(e)}
                value={log.first}
                required
              ></input>
            </div>
            <div className="gratitude-inner-form-group">
              <input
                className="second"
                type="text"
                value={log.second}
                onChange={(e) => secondFunc(e)}
                required
              ></input>
            </div>
            <div className="gratitude-inner-form-group ">
              <input
                className="third"
                type="text"
                value={log.third}
                onChange={(e) => thirdFunc(e)}
                required
              ></input>
            </div>
            <input
              className="gratitude-inner-button-agree agree-button"
              // onClick={handleAgree}
              type="submit"
              value="FERTIG"
            />
          </form>

          <button
            className="gratitude-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="gratitude-inner">
          <img
            src={reset}
            alt=""
            className="gratitude-inner-image reset-image"
          />
          <h1 className="gratitude-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="gratitude-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="gratitude-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="gratitude-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="gratitude-inner-button-cancel cancel-button"
            onClick={() => props.setGratitudePop(false)}
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

export default Gratitude;
