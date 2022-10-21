import React, { useEffect, useState } from "react";
import "./TagesScore.scss";
import { getRemainingTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimer";
import axios from "axios";
import crown from "./img/crown.svg";

function TagesScore(props) {
  const [dailyChart, setDailyChart] = useState("");
  const [dailyPoints, setDailyPoints] = useState(0);
  const [dailyScore, setDailyScore] = useState(0);

  const [habit, setHabit] = useState([
    "nourish",
    "training",
    "sleep",
    "shower",
    "breath",
    "gratitude",
  ]);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));
    setDailyPoints(5);

    let countdown = getRemainingTimeUntilMsTimestamp(1667602800000);
    let days = "day" + (28 - parseInt(countdown.days, 10));

    axios
      .post(
        "http://localhost:5000/posts/get/dailies",
        {
          email: login.email,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        let points_log = 0;
        habit.forEach((e) => {
          if (response.data.user.hasOwnProperty("dailies")) {
            if (response.data.user.dailies.hasOwnProperty(e)) {
              if (response.data.user.dailies[e].hasOwnProperty(days)) {
                if (response.data.user.dailies[e][days]) {
                  if (e != "gratitude") {
                    let points = response.data.user.dailies[e][days];

                    points_log = points_log + points;
                  } else {
                    points_log = points_log + 2;
                  }

                  setDailyPoints(points_log);

                  props.setDaysScore(points_log);
                  setDailyScore(Math.round((100 / 16) * points_log));
                  setDailyChart(Math.round((100 / 16) * points_log) + ",100");
                }
              }
            }
          }
        });
      });
  }, [props.reload]);

  return (
    <div className="tagesscore">
      <svg viewBox="0 0 36 36" className="tagesscore-chart">
        <path
          className="tagesscore-circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="tagesscore-circle"
          strokeDasharray={dailyChart}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <div className="tagesscore-content">
        {/* <img src={crown} alt="" className="tagesscore-crown" /> */}
        <p className="tagesscore-rate">{dailyScore}</p>
        <p className="tagesscore-percent">%</p>
      </div>

      <div className="tagesscore-footer">
        <h3 className="tagesscore-footer-title">TAGESSCORE</h3>
        <p className="tagesscore-footer-text">{dailyPoints} von 16 Pkt.</p>
      </div>

      <div className="tagesscore-circle-bg-2"></div>
    </div>
  );
}

export default TagesScore;
