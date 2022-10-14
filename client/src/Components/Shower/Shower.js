import React from "react";
import "./Shower.scss";
import shower from "../Dailies/img/shower.svg";

function Shower(props) {
  const handleBleibDran = () => {
    props.setShowerPop(false);
    props.setBleibDran(true);
  };
  return props.trigger ? (
    <div className="shower">
      <div className="shower-inner">
        <img src={shower} alt="" className="shower-inner-image" />
        <h1 className="shower-inner-title">SHOWER</h1>
        <h3 className="shower-inner-sub">Hast du dich heute clean ernährt?</h3>
        <p className="shower-inner-text">
          Wenn du dich an alle Ernährungsregeln gehalten hast, bekommst du 4
          Punkte.
        </p>
        <button
          className="shower-inner-button-agree agree-button"
          onClick={() => props.setShowerPop(false)}
        >
          Ja
        </button>
        <button
          className="shower-inner-button-cancel cancel-button"
          onClick={handleBleibDran}
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

export default Shower;
