import React, { useState } from "react";
import "./Nourish.scss";

import nourish from "../Dailies/img/nourish.svg";

function Nourish(props) {
  const handleBleibDran = () => {
    props.setNourishPop(false);
    props.setBleibDran(true);
  };

  return props.trigger ? (
    <div className="nourish">
      <div className="nourish-inner">
        <img src={nourish} alt="" className="nourish-inner-image" />
        <h1 className="nourish-inner-title">ERNÄHRUNG</h1>
        <h3 className="nourish-inner-sub">Hast du dich heute clean ernährt?</h3>
        <p className="nourish-inner-text">
          Wenn du dich an alle Ernährungsregeln gehalten hast, bekommst du
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

export default Nourish;
