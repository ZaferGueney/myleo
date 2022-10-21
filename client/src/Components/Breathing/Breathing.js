import React, { useState } from "react";
import breath from "../Dailies/img/breath.svg";
import axios from "axios";
import "./Breathing.scss";
import Stopwatch from "../StopWatch/StopWatch";

function Breathing(props) {
  const [handleStart, setHandleStart] = useState(false);
  const [interv, setInterv] = useState();

  const [time, setTime] = useState({ s: 0, m: 0 });

  const start = () => {
    run();
    setInterv(setInterval(run, 1000));
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ s: 0, m: 0 });
  };

  let updatedS = time.s,
    updatedM = time.m;

  const run = () => {
    if (updatedM === 4 && updatedS === 60) {
      clearInterval(interv);
      setTime({ s: 0, m: 0 });
      setHandleStart(false);
      return setTime({ s: 0, m: 0 });
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM });
  };

  const handleAgree = () => {
    document.querySelector(".dailies-app-breath").classList.add("app-is-check");
    document
      .querySelector(".dailies-app-check-breath")
      .classList.add("check-is-check");

    props.props.setBreathPop(false);
    props.props.setCheckMadeBreath(true);
    props.setBreathing(false);

    axios
      .post(
        "http://localhost:5000/posts/add/dailies",
        {
          email: props.props.currentUser,
          day: props.props.currentDay,
          points: 2,
          daily: "breath",
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        props.props.setDailiesData(response.data.user);
        props.props.setReload(!props.reload);
      });
  };

  const handleBleibDran = () => {
    props.props.setBreathPop(false);
    props.props.setBleibDran(true);
    props.setBreathing(false);
  };

  return (
    <div>
      <div className="breathing">
        <div className="breathing-inner">
          <img src={breath} alt="" className="breathing-inner-image" />
          <h1 className="breathing-inner-title">ATMEN</h1>

          <div className="breathing-inner-exercise">
            <p
              className={`breathing-inner-exercise-in ${
                handleStart ? "breathing-inner-exercise-in-animation" : ""
              }`}
            >
              EINATMEN
            </p>
            <div className="breathing-inner-exercise-outer">
              <div
                className={`breathing-inner-exercise-center ${
                  handleStart ? "breathing-inner-exercise-center-animation" : ""
                }`}
              ></div>
            </div>
            <p
              className={`breathing-inner-exercise-out ${
                handleStart ? "breathing-inner-exercise-out-animation" : ""
              }`}
            >
              AUSATMEN
            </p>
            <div className="breathing-inner-exercise-div">
              {!handleStart ? (
                <button
                  className="breathing-inner-exercise-button"
                  onClick={() => {
                    setHandleStart(true);
                    start();
                  }}
                >
                  START
                </button>
              ) : (
                <button
                  className="breathing-inner-exercise-button breathing-inner-exercise-button-stop"
                  onClick={() => {
                    setHandleStart(false);
                    reset();
                  }}
                >
                  STOP
                </button>
              )}
              {handleStart ? (
                <div className="breathing-inner-timer">
                  <div className="clockholder">
                    <div className="stopwatch">
                      <Stopwatch time={time} />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <button
            className="breathing-inner-button-agree agree-button"
            onClick={() => {
              setHandleStart(false);
              handleAgree();
              reset();
            }}
          >
            FERTIG
          </button>

          <button
            className="breathing-inner-button-cancel cancel-button"
            onClick={handleBleibDran}
          >
            Abbrechen
          </button>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Breathing;
