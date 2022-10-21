import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ReflectionLog.scss";
import reflection from "../Weeklies/img/reflection.svg";
import date from "./img/date.svg";
import { getAfterTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimerAfter";

function ReflectionLog(props) {
  const [fetchedReflection, setFetchedReflection] = useState([]);
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));

    axios
      .post(
        "http://localhost:5000/posts/get/weeklies",
        {
          email: login.email,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        if (response.data.user.hasOwnProperty("weeklies")) {
          if (response.data.user.weeklies.hasOwnProperty("reflection")) {
            if (response.data.user.weeklies.reflection) {
              handleObject(response.data.user.weeklies.reflection);
            }
          }
        }
      });
  }, [props.reloadLeaderboard]);

  const handleObject = (e) => {
    let reflectionArray = [];
    for (const [key, value] of Object.entries(e)) {
      if (value) {
        reflectionArray.push(value);
      }
    }

    setFetchedReflection(reflectionArray);
  };

  return (
    <div className="reflectionlog">
      <div className="reflectionlog-header">
        <img src={reflection} alt="" className="reflectionlog-header-image" />
        <h2 className="reflectionlog-header-title">Selbstreflexionen</h2>
      </div>

      {fetchedReflection.length ? (
        <div className="reflectionlog-log">
          {fetchedReflection.map((item) => (
            <div key={item.time}>
              <div className="reflectionlog-log-single">
                <img
                  src={date}
                  alt=""
                  className="reflectionlog-log-single-image"
                />
                <div className="reflectionlog-log-single-title">
                  vor {getAfterTimeUntilMsTimestamp(item.time).minutes} Minuten
                </div>
                <p className="reflectionlog-log-single-text">{item.first}</p>
              </div>
              <div className="reflectionlog-log-single">
                <img
                  src={date}
                  alt=""
                  className="reflectionlog-log-single-image"
                />
                <div className="reflectionlog-log-single-title">
                  vor {getAfterTimeUntilMsTimestamp(item.time).minutes} Minuten
                </div>
                <p className="reflectionlog-log-single-text">{item.second}</p>
              </div>
              <div className="reflectionlog-log-single">
                <img
                  src={date}
                  alt=""
                  className="reflectionlog-log-single-image"
                />
                <div className="reflectionlog-log-single-title">
                  vor {getAfterTimeUntilMsTimestamp(item.time).minutes} Minuten
                </div>
                <p className="reflectionlog-log-single-text">{item.third}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="reflectionlog-empty">Du hast noch keine Einträge.</p>
        </div>
      )}

      {/* <div className="reflectionlog-log-single">
            <img src={date} alt="" className="reflectionlog-log-single-image" />
            <div className="reflectionlog-log-single-title">vor 20 Minuten</div>
            <p className="reflectionlog-log-single-text">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="reflectionlog-log-single">
            <img src={date} alt="" className="reflectionlog-log-single-image" />
            <div className="reflectionlog-log-single-title">vor 20 Minuten</div>
            <p className="reflectionlog-log-single-text">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div> */}

      <button className="reflectionlog-button">ALLE EINTRÄGE ANSEHEN</button>
    </div>
  );
}

export default ReflectionLog;
