const daysEll = document.getElementById("days1");
const hoursEll = document.getElementById("hours1");
const minsEll = document.getElementById("mins1");
const secondsEll = document.getElementById("seconds1");

const newYears = "27 Dec 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEll.innerHTML = days;
  hoursEll.innerHTML = formatTime(hours);
  minsEll.innerHTML = formatTime(mins);
  secondsEll.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
