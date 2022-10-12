import React from "react";
import "./Training.scss";
import training from "../Dailies/img/training.svg";

function Training(props) {
  return props.trigger ? (
    <div className="training">
      <div className="training-inner">
        <img src={training} alt="" className="training-inner-image" />
        <h1 className="training-inner-title">TRAINING</h1>
        <h3 className="training-inner-sub">
          Hast du dich heute clean ernährt?
        </h3>
        <p className="training-inner-text">
          Wenn du dich an alle Ernährungsregeln gehalten hast, bekommst du 4
          Punkte.
        </p>
        <button
          className="training-inner-button-agree agree-button"
          onClick={() => props.setTrainingPop(false)}
        >
          Ja
        </button>
        <button
          className="training-inner-button-cancel cancel-button"
          onClick={() => props.setTrainingPop(false)}
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

export default Training;
