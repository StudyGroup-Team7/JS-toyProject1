// stopwatch
const timerEl = document.querySelector(".timer");
const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
const resetEl = document.querySelector(".reset");

let seconds = 0;
let interval;

startEl.addEventListener("click", start);
stopEl.addEventListener("click", stop);
resetEl.addEventListener("click", reset);

function timer() {
  seconds++;
  let hrs = String(parseInt(seconds / 3600)).padStart(2, "0");
  let mins = String(parseInt(seconds / 60) - `${hrs * 60}`).padStart(2, "0");
  let secs = String(seconds % 60).padStart(2, "0");

  timerEl.textContent = ` ${hrs}:${mins}:${secs}`;
}
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
