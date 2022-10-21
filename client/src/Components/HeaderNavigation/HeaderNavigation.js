import React, { useEffect, useState } from "react";

import "./HeaderNavigation.scss";
import burger from "./img/burger.svg";
import arrow from "./img/arrow.svg";
import logo from "./img/logo.svg";
import profile from "./img/profile.svg";
import { getRemainingTimeUntilMsTimestamp } from "../Countdown/Utils/CountdownTimer";

function HeaderNavigation() {
  const [currentDay, setCurrentDay] = useState(0);
  const [current, setCurrent] = useState(new Date());
  const [day, setDay] = useState([
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ]);
  const [months, setMonths] = useState([
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ]);

  useEffect(() => {
    let countdown = getRemainingTimeUntilMsTimestamp(1667602800000);
    let days = 28 - parseInt(countdown.days, 10);
    setCurrentDay(days);
  }, []);

  return (
    <div className="header-navigation">
      <img src={profile} alt="" className="header-navigation-profile" />
      <img src={logo} alt="" className="header-navigation-logo" />
      <img src={arrow} alt="" className="header-navigation-arrow" />
      <img src={burger} alt="" className="header-navigation-burger" />
      <p className="header-navigation-date">
        {day[current.getDay()].toUpperCase()} , {current.getDate()}{" "}
        {months[current.getMonth()].toUpperCase()} {current.getFullYear()}
      </p>
      <div className="header-navigation-days">
        <img src={arrow} alt="" className="header-navigation-arrow-2" />
        <p className="header-navigation-days-title">TAG {currentDay} VON 28</p>
      </div>
    </div>
  );
}

export default HeaderNavigation;
