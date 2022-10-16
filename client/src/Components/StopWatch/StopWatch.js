import React from "react";

import "./StopWatch.scss";

function StopWatch(props) {
  return (
    <div>
      <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
      &nbsp;:&nbsp;
      <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
    </div>
  );
}

export default StopWatch;
