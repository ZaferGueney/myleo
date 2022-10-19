import React, { useEffect, useState } from "react";
import axios from "axios";

import "./GratitudeLog.scss";
import gratitude from "./img/gratitude.svg";
import date from "./img/date.svg";

function GratitudeLog() {
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
        handleObject(response.data.user.dailies.gratitude);
        // setFetchedGratitude(response.data.user.dailies.gratitude);
      });
  }, []);

  const handleObject = (e) => {
    let gratitudeArray = [];
    for (const [key, value] of Object.entries(e)) {
      // console.log(e);
      // for (const [key2, value2] of Object.entries(value)) {
      // console.log(key2);
      // console.log(value2);
      gratitudeArray.push(value);

      // console.log(gratitudeArray);
      // console.log(gratitudeArray);
      // }
    }

    setFetchedGratitude(gratitudeArray);

    // fetchedGratitude.forEach((element) => {
    //   console.log(element);
    // });

    for (let index = 0; index < fetchedGratitude.length; index++) {
      console.log("index");
      console.log(fetchedGratitude[index]);
    }
  };

  console.log(fetchedGratitude);
  return (
    <div className="gratitudelog">
      <div className="gratitudelog-header">
        <img src={gratitude} alt="" className="gratitudelog-header-image" />
        <h2 className="gratitudelog-header-title">Wofür du dankbar bist</h2>
      </div>

      <div className="gratitudelog-log">
        {fetchedGratitude.length ? (
          <div>
            {" "}
            {fetchedGratitude.forEach((item) => {
              <div className="gratitudelog-log-single">
                <img
                  src={date}
                  alt=""
                  className="gratitudelog-log-single-image"
                />
                <div className="gratitudelog-log-single-title">
                  vor 20 Minuten
                </div>
                <p className="gratitudelog-log-single-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  consectetur.
                </p>
              </div>;
            })}
          </div>
        ) : (
          ""
        )}

        {/* <div className="gratitudelog-log-single">
          <img src={date} alt="" className="gratitudelog-log-single-image" />
          <div className="gratitudelog-log-single-title">vor 20 Minuten</div>
          <p className="gratitudelog-log-single-text">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="gratitudelog-log-single">
          <img src={date} alt="" className="gratitudelog-log-single-image" />
          <div className="gratitudelog-log-single-title">vor 20 Minuten</div>
          <p className="gratitudelog-log-single-text">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div> */}
      </div>
      <button className="gratitudelog-button">ALLE EINTRÄGE ANSEHEN</button>
    </div>
  );
}

export default GratitudeLog;
