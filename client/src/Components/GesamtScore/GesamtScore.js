import React, { useEffect, useState } from "react";
import "./GesamtScore.scss";
import crown from "./img/crown.svg";
import { getRemainingTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimer";
import axios from "axios";
function GesamtScore(props) {
  const [habit, setHabit] = useState([
    "workshop",
    "action",
    "nature",
    "reflection",
  ]);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("currentUser"));

    let countdown = getRemainingTimeUntilMsTimestamp(1668790800000);

    let weeks;

    if (countdown.weeks == "03") {
      weeks = "week01";
    } else if (countdown.weeks == "02") {
      weeks = "week02";
    } else if (countdown.weeks == "01") {
      weeks = "week03";
    } else if (countdown.weeks == "04") {
      weeks = "week04";
    } else {
    }

    axios
      .post(
        "http://localhost:5000/posts/get/weeklies",
        {
          email: login.email,
        }
        // { responseType: "blob" }
      )
      .then((response) => {
        let points_log = 0;

        habit.forEach((e) => {
          if (response.data.user.hasOwnProperty("weeklies")) {
            if (response.data.user.weeklies.hasOwnProperty(e)) {
              if (response.data.user.weeklies[e].hasOwnProperty(weeks)) {
                if (response.data.user.weeklies[e][weeks]) {
                  if (e == "workshop" || e == "action") {
                    let points = response.data.user.weeklies[e][weeks];
                    points_log = points_log + points;
                  } else if (e == "nature") {
                    if (
                      response.data.user.weeklies[e][weeks].hasOwnProperty(
                        "points"
                      )
                    ) {
                      let points = response.data.user.weeklies[e][weeks].points;
                      points_log = points_log + points;
                    }
                  } else if (e == "reflection") {
                    points_log = points_log + 2;
                  } else {
                    console.log("nicht dabei");
                  }

                  props.setWeeksScore(points_log);
                }
              }
            }
          }
        });
      });
    //TO DEBUGG
    console.log(
      "SUM: " + props.daysScore + " <-Day Week-> " + props.weeksScore
    );
    axios
      .post(
        "http://localhost:5000/posts/add/leaderboard",
        {
          email: login.email,
          points: props.daysScore + props.weeksScore,
        }
        // { responseType: "blob" }
      )
      .then((response) => {});
  }, [props.reloadLeaderboard, props.daysScore, props.weeksScore]);

  //TO DEBUGG
  // console.log("SUM: " + props.daysScore + " <-Day Week-> " + props.weeksScore);
  return (
    <div className="gesamtscore">
      <svg viewBox="0 0 36 36" className="gesamtscore-chart">
        <path
          className="gesamtscore-circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="gesamtscore-circle"
          strokeDasharray={
            Math.round(((props.daysScore + props.weeksScore) * 100) / 536) +
            ",100"
          }
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <div className="gesamtscore-content">
        <img src={crown} alt="" className="gesamtscore-crown" />
        <p className="gesamtscore-rate">
          {Math.round(((props.daysScore + props.weeksScore) * 100) / 536)}
        </p>
        <p className="gesamtscore-percent">%</p>
      </div>

      <div className="gesamtscore-footer">
        <h3 className="gesamtscore-footer-title">GESAMTSCORE</h3>
        <p className="gesamtscore-footer-text">Mach weiter so!</p>
      </div>

      <div className="gesamtscore-circle-bg-2"></div>
    </div>
  );
}

export default GesamtScore;
