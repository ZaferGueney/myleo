import { useEffect, useState } from "react";
import "./Countdown.scss";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimer";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Countdown = ({ countdownTimestampMs }) => {
  const [remainmingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown">
      <span id="days">{remainmingTime.days}</span>
      <span>days</span>
      <span className="two-numbers">{remainmingTime.hours}</span>
      <span>hours</span>
      <span className="two-numbers">{remainmingTime.minutes}</span>
      <span>minutes</span>
      <span className="two-numbers">{remainmingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default Countdown;
