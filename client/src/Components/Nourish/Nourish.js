import React from "react";
import "./Nourish.scss";
import nourish from "../Dailies/img/nourish.svg";

function Nourish(props) {
  return props.trigger ? (
    <div className="nourish">
      <div className="nourish-inner">
        <img src={nourish} alt="" className="nourish-inner-image" />
        <h1 className="nourish-inner-title">ERNÄHRUNG</h1>
        <h3 className="nourish-inner-sub">Hast du dich heute clean ernährt?</h3>
        <p className="nourish-inner-text">
          Wenn du dich an alle Ernährungsregeln gehalten hast, bekommst du 4
          Punkte.
        </p>
        <button
          className="nourish-inner-button-agree agree-button"
          onClick={() => props.setNourishPop(false)}
        >
          Ja
        </button>
        <button
          className="nourish-inner-button-cancel cancel-button"
          onClick={() => props.setNourishPop(false)}
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

export default Nourish;
