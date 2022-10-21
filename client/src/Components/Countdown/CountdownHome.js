import { useEffect, useState } from "react";
import "./CountdownHome.scss";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimer";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

const CountdownHome = ({ countdownTimestampMs }) => {
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
    <div className="countdown-home">
      <span className="two-numbers-home">{remainmingTime.hours}</span>
      <span>:</span>
      <span className="two-numbers-home">{remainmingTime.minutes}</span>
      <span>:</span>
      <span className="two-numbers-home">{remainmingTime.seconds}</span>
    </div>
  );
};

export default CountdownHome;
