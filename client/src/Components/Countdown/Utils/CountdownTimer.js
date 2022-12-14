import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestamp = dayjs(timestampMs);
  const nowDayjs = dayjs();

  if (timestamp.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
      weeks: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestamp),
    minutes: getRemainingMinutes(nowDayjs, timestamp),
    hours: getRemainingHours(nowDayjs, timestamp),
    days: getRemainingDays(nowDayjs, timestamp),
    weeks: getRemainingWeeks(nowDayjs, timestamp),
  };
}

function getRemainingSeconds(nowDayjs, timestamp) {
  const seconds = timestamp.diff(nowDayjs, "seconds") % 60;

  return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timestamp) {
  const minutes = timestamp.diff(nowDayjs, "minutes") % 60;

  return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs, timestamp) {
  const hours = timestamp.diff(nowDayjs, "hours") % 24;

  return padWithZeros(hours, 2);
}

export function getRemainingDays(nowDayjs, timestamp) {
  const days = timestamp.diff(nowDayjs, "days") & 7;

  return days.toString();
}

function getRemainingWeeks(nowDayjs, timestamp) {
  const weeks = timestamp.diff(nowDayjs, "weeks");

  return padWithZeros(weeks, 2);
}

function padWithZeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}
