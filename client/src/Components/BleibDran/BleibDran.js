import React from "react";
import "./BleibDran.scss";
import bleibdran from "../BleibDran/img/bleibdran.svg";

function BleibDran(props) {
  return props.triggerBleibDran ? (
    <div className="bleibdran">
      <div className="bleibdran-inner">
        <img src={bleibdran} alt="" className="bleibdran-inner-image" />
        <h1 className="bleibdran-inner-title">BLEIB DRAN!</h1>
        {/* <h3 className="bleibdran-inner-sub">
          Hast du dich heute clean ernährt?
        </h3> */}
        <p className="bleibdran-inner-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          facilis? Aspernatur qui, voluptatum perspiciatis dicta libero illum
          laborum ad culpa!
        </p>
        <button
          className="bleibdran-inner-button-agree agree-button"
          onClick={() => props.setBleibdran(false)}
        >
          MEHR INFOS
        </button>
        <button
          className="bleibdran-inner-button-cancel cancel-button"
          onClick={() => props.setBleibDran(false)}
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

export default BleibDran;
