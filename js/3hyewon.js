const menuEl = document.querySelector(".header__top__menu");
const ulEl = document.querySelector("ul");
menuEl.addEventListener("click", showMenu);
function showMenu() {
  ulEl.classList.toggle("hidden");
}

// stopwatch
const timerEl = document.querySelector(".timer");
const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
const resetEl = document.querySelector(".reset");

let seconds = 0;
let interval;
function start() {
  interval = setInterval(timer, 1000);
}
function stop() {
  clearInterval(interval);
}
function reset() {
  clearInterval(interval);
  timerEl.textContent = "00:00:00";
}

startEl.addEventListener("click", start);
stopEl.addEventListener("click", stop);
resetEl.addEventListener("click", reset);

function timer() {
  seconds++;
  const hrs = String(parseInt(seconds / 3600)).padStart(2, "0");
  const mins = String(parseInt(seconds / 60) - `${hrs * 60}`).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  timerEl.textContent = ` ${hrs}:${mins}:${secs}`;
}

// month. date. day.
function getCalendar() {
  const calInput = document.querySelector(".calendar-input");
  const calDate = new Date();
  const todayMon = calDate.getMonth() + 1;
  const todayDate = calDate.getDate();
  const todayDay = calDate.getDay();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  calInput.textContent = `${todayMon}월 ${todayDate}일 ,${week[todayDay]}`;
}
getCalendar();
// clock

function getClock() {
  const date = new Date();
  const todayHr = String(date.getHours()).padStart(2, "0");
  const todayMin = String(date.getMinutes()).padStart(2, "0");
  const todaySecs = String(date.getSeconds()).padStart(2, "0");
  const clockHr = document.querySelector(".clock-wrap .hr");
  const clockMin = document.querySelector(".clock-wrap .min");
  const clockSec = document.querySelector(".clock-wrap .sec");

  clockHr.textContent = `${todayHr}`;
  clockMin.textContent = `${todayMin}`;
  clockSec.textContent = `${todaySecs}`;
}

setInterval(getClock, 1000);
getClock();

// 콘솔창 이스터 에그
console.log(
  "%cWelcome to %cHyewon's website🐠",
  "color: pink",
  "color: white; font-style: italic; background-color: cornflowerblue;padding: 4px; border-radius: 4px; font-size:32px"
);
