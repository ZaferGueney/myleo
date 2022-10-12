import React from "react";
import "./Sleep.scss";
import sleep from "../Dailies/img/sleep.svg";

function Sleep(props) {
  return props.trigger ? (
    <div className="sleep">
      <div className="sleep-inner">
        <img src={sleep} alt="" className="sleep-inner-image" />
        <h1 className="sleep-inner-title">SLEEP</h1>
        <h3 className="sleep-inner-sub">Hast du dich heute clean ernährt?</h3>
        <p className="sleep-inner-text">
          Wenn du dich an alle Ernährungsregeln gehalten hast, bekommst du 4
          Punkte.
        </p>
        <button
          className="sleep-inner-button-agree agree-button"
          onClick={() => props.setSleepPop(false)}
        >
          Ja
        </button>
        <button
          className="sleep-inner-button-cancel cancel-button"
          onClick={() => props.setSleepPop(false)}
        >
          Abbrechen
        </button>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Sleep;
