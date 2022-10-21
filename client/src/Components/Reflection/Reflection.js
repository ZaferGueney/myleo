import React, { useEffect, useState } from "react";

import reflection from "../Weeklies/img/reflection.svg";
import reset from "../Dailies/img/reset.svg";

import axios from "axios";
import "./Reflection.scss";

function Reflection(props) {
  const [log, setLog] = useState({ first: "", second: "", third: "" });

  useEffect(() => {
    if (
      document
        .querySelector(".weeklies-app-check-reflection")
        .classList.contains("check-is-check")
    ) {
      props.setCheckMadeReflection(true);
    }
  }, [props.checkMadeReflection]);

  const handleBleibDran = () => {
    props.setReflectionPop(false);
    props.setBleibDran(true);
  };

  const handleAgree = () => {
    document
      .querySelector(".weeklies-app-reflection")
      .classList.add("app-is-check");
    document
      .querySelector(".weeklies-app-check-reflection")
      .classList.add("check-is-check");

    props.setReflectionPop(false);
    props.setCheckMadeReflection(true);

    axios
      .post(
        "http://localhost:5000/posts/add/reflection-log",
        {
          email: props.currentUser,
          week: props.currentWeek,
          log: log,
          weeklie: "reflection",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);
        console.log(response.data.user);

        props.setReloadLeaderboard(!props.reloadLeaderboard);
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
      time: Date.now(),
    }));
  };

  const handleReset = () => {
    document
      .querySelector(".weeklies-app-reflection")
      .classList.remove("app-is-check");
    document
      .querySelector(".weeklies-app-check-reflection")
      .classList.remove("check-is-check");

    props.setReflectionPop(false);

    axios
      .post(
        "http://localhost:5000/posts/add/reflection-log",
        {
          email: props.currentUser,
          week: props.currentWeek,
          log: 0,
          weeklie: "reflection",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.setWeekliesData(response.data.user);
        props.setCheckMadeReflection(false);
        console.log(response.data.user);

        props.setReloadLeaderboard(!props.reloadLeaderboard);
      });
  };

  return props.trigger ? (
    <div className="reflection">
      {!props.checkMadeReflection ? (
        <div className="reflection-inner">
          <img src={reflection} alt="" className="reflection-inner-image" />
          <h1 className="reflection-inner-title">SELBSTREFLEXION</h1>
          <h3 className="reflection-inner-sub">Wofür bist Du heute dankbar?</h3>
          <p className="reflection-inner-text">
            Notiere 3 Dinge, für die Du dankbar bist und Du erhältst 2 Punkte.
          </p>
          <form className="reflection-inner-form" onSubmit={handleAgree}>
            <div className="reflection-inner-form-group ">
              <label htmlFor="first">
                Was würdest Du in Deinem Leben anders machen?
              </label>
              <input
                name="first"
                className="first"
                type="text"
                onChange={(e) => firstFunc(e)}
                value={log.first}
                required
              ></input>
            </div>
            <div className="reflection-inner-form-group">
              <label htmlFor="first">Bist Du heute glücklich?</label>
              <input
                className="second"
                type="text"
                value={log.second}
                onChange={(e) => secondFunc(e)}
                required
              ></input>
            </div>
            <div className="reflection-inner-form-group ">
              <label htmlFor="first">
                Was ist Dir das wichtigste Ziel für die Zukunft?
              </label>
              <input
                className="third"
                type="text"
                value={log.third}
                onChange={(e) => thirdFunc(e)}
                required
              ></input>
            </div>
            <input
              className="reflection-inner-button-agree agree-button"
              // onClick={handleAgree}
              type="submit"
              value="FERTIG"
            />
          </form>

          <button
            className="reflection-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      ) : (
        <div className="reflection-inner">
          <img
            src={reset}
            alt=""
            className="reflection-inner-image reset-image"
          />
          <h1 className="reflection-inner-title">PUNKTE WIDERRUFEN</h1>
          <h3 className="reflection-inner-sub">
            Hier kannst du deine Punkte zurücksetzen.
          </h3>
          <p className="reflection-inner-text">
            Klicke auf den Button wenn du deine Antwort neu eingeben möchtest.
          </p>
          <button
            className="reflection-inner-button-agree agree-button"
            onClick={handleReset}
          >
            PUNKTE WIDERRUFEN
          </button>

          <button
            className="reflection-inner-button-cancel cancel-button"
            onClick={() => props.setReflectionPop(false)}
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

export default Reflection;
