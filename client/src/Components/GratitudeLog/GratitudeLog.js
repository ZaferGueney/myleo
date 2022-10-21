import React, { useEffect, useState } from "react";
import axios from "axios";

import "./GratitudeLog.scss";
import gratitude from "./img/gratitude.svg";
import date from "./img/date.svg";
import { getAfterTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimerAfter";

function GratitudeLog(props) {
  const [fetchedGratitude, setFetchedGratitude] = useState([]);
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));

    axios
      .post(
        "http://localhost:5000/posts/get/dailies",
        {
          email: login.email,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        if (response.data.user.hasOwnProperty("dailies")) {
          if (response.data.user.dailies.hasOwnProperty("gratitude")) {
            if (response.data.user.dailies.gratitude) {
              handleObject(response.data.user.dailies.gratitude);
            }
          }
        }
      });
  }, [props.reload]);

  const handleObject = (e) => {
    let gratitudeArray = [];
    for (const [key, value] of Object.entries(e)) {
      if (value) {
        gratitudeArray.push(value);
      }
    }

    setFetchedGratitude(gratitudeArray);
  };

  return (
    <div className="gratitudelog">
      <div className="gratitudelog-header">
        <img src={gratitude} alt="" className="gratitudelog-header-image" />
        <h2 className="gratitudelog-header-title">Wofür du dankbar bist</h2>
      </div>

      {fetchedGratitude.length ? (
        <div className="gratitudelog-log">
          {fetchedGratitude.map((item) => (
            <div key={item.time}>
              <div className="gratitudelog-log-single">
                <img
                  src={date}
                  alt=""
                  className="gratitudelog-log-single-image"
                />
                <div className="gratitudelog-log-single-title">
                  vor {getAfterTimeUntilMsTimestamp(item.time).minutes} Minuten
                </div>
                <p className="gratitudelog-log-single-text">{item.first}</p>
              </div>
              <div className="gratitudelog-log-single">
                <img
                  src={date}
                  alt=""
                  className="gratitudelog-log-single-image"
                />
                <div className="gratitudelog-log-single-title">
                  vor {getAfterTimeUntilMsTimestamp(item.time).minutes} Minuten
                </div>
                <p className="gratitudelog-log-single-text">{item.second}</p>
              </div>
              <div className="gratitudelog-log-single">
                <img
                  src={date}
                  alt=""
                  className="gratitudelog-log-single-image"
                />
                <div className="gratitudelog-log-single-title">
                  vor {getAfterTimeUntilMsTimestamp(item.time).minutes} Minuten
                </div>
                <p className="gratitudelog-log-single-text">{item.third}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="gratitudelog-empty">Du hast noch keine Einträge.</p>
        </div>
      )}

      <button className="gratitudelog-button">ALLE EINTRÄGE ANSEHEN</button>
    </div>
  );
}

export default GratitudeLog;
