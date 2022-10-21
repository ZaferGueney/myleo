import dayjs from "dayjs";

export function getAfterTimeUntilMsTimestamp(timestampMs) {
  const timestamp = dayjs(timestampMs);
  const nowDayjs = dayjs();

  if (timestamp.isAfter(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestamp),
    minutes: getRemainingMinutes(nowDayjs, timestamp),
    hours: getRemainingHours(nowDayjs, timestamp),
    days: getRemainingDays(nowDayjs, timestamp),
  };
}

function getRemainingSeconds(nowDayjs, timestamp) {
  const seconds = Math.abs(timestamp.diff(nowDayjs, "seconds") % 60);

  return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timestamp) {
  const minutes = Math.abs(timestamp.diff(nowDayjs, "minutes") % 60);
  return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs, timestamp) {
  const hours = Math.abs(timestamp.diff(nowDayjs, "hours") % 24);
  return padWithZeros(hours, 2);
}

export function getRemainingDays(nowDayjs, timestamp) {
  const days = timestamp.diff(nowDayjs, "days");

  return days.toString();
}

function padWithZeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}
