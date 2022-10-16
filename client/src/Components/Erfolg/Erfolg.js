import React from "react";
import "./Erfolg.scss";
import erfolg from "../Erfolg/img/bleibdran.svg";

function Erfolg(props) {
  return props.triggerErfolg ? (
    <div className="erfolg">
      <div className="erfolg-inner">
        <img src={erfolg} alt="" className="erfolg-inner-image" />
        <h1 className="erfolg-inner-title">ERFOLG!</h1>
        {/* <h3 className="erfolg-inner-sub">
          Hast du dich heute clean ernährt?
        </h3> */}
        <p className="erfolg-inner-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          facilis? Aspernatur qui, voluptatum perspiciatis dicta libero illum
          laborum ad culpa!
        </p>
        <button
          className="erfolg-inner-button-agree agree-button"
          onClick={() => props.setErfolg(false)}
        >
          MEHR INFOS
        </button>
        <button
          className="erfolg-inner-button-cancel cancel-button"
          onClick={() => props.setErfolg(false)}
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

export default Erfolg;
