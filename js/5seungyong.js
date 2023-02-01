const btnStart = document.querySelector(".btn_start");
const btnLap = document.querySelector(".btn_lap");
const spanTimeMin = document.querySelector(".stop_watch_time_min");
const spanTimeSec = document.querySelector(".stop_watch_time_sec");
const spanTimeMilsec = document.querySelector(".stop_watch_time_milsec");
const ulLapList = document.querySelector(".ul_lap_list");

let bCheckStart = false;
let nTime = 0;
let timerId;
let nMin = 0;
let nSec = 0;
let nMilsec = 0;
let nLapCnt = 0;

btnStart.addEventListener("click", () => {
  if (!bCheckStart) {
    btnStart.textContent = "정지";
    btnStart.style.backgroundColor = "#c43838";
    btnLap.textContent = "랩";
    bCheckStart = true;
    StartTime();
  } else {
    btnStart.textContent = "시작";
    btnStart.style.backgroundColor = "#333";
    btnLap.textContent = "재설정";
    bCheckStart = false;
    StopTime();
  }
});

btnLap.addEventListener("click", () => {
  if (!bCheckStart) {
    ClearTime();
  } else {
    AddLapTime();
  }
});

function StartTime() {
  if (timerId == null) setTimeout(printTime, 10);
}

function StopTime() {
  if (timerId != null) {
    clearTimeout(timerId);
    timerId = null;
  }
}

function printTime() {
  ++nTime;
  TimeSetting();
  timerId = setTimeout(printTime, 10);
}

function TimeSetting() {
  nMin = parseInt(String(nTime / (60 * 60)));
  nSec = parseInt(String((nTime - nMin * 60 * 60) / 60));
  nMilsec = (nTime % 60) % 60;

  spanTimeMin.textContent = String(nMin).padStart(2, "0");
  spanTimeSec.textContent = String(nSec).padStart(2, "0");
  spanTimeMilsec.textContent = String(nMilsec).padStart(2, "0");
}

function AddLapTime() {
  ++nLapCnt;
  const liEl = document.createElement("li");
  const pNum = document.createElement("p");
  const pTime = document.createElement("p");
  pNum.textContent = nLapCnt;
  pTime.textContent =
    String(nMin).padStart(2, "0") +
    ":" +
    String(nSec).padStart(2, "0") +
    ":" +
    String(nMilsec).padStart(2, "0");

  liEl.append(pNum, pTime);
  console.log(liEl);
  ulLapList.prepend(liEl);
}

function ClearTime() {
  spanTimeMin.textContent = "00";
  spanTimeSec.textContent = "00";
  spanTimeMilsec.textContent = "00";
  nMin = 0;
  nSec = 0;
  nMilsec = 0;
  nTime = 0;
  nLapCnt = 0;
  ulLapList.innerHTML = "";
}

const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

const toggledMenu = menuToggle.addEventListener("click", function () {
  for (var activated = 0; activated < activeElements.length; activated++) {
    activeElements[activated].classList.toggle("active");
  }
});

//////////////////////////////////////////////////////////// 시계
const spClockHour = document.querySelector(".clock-hour");
const spClockMin = document.querySelector(".clock-min");
const spClockSec = document.querySelector(".clock-sec");

(() => {
  setTimeout(ClockStart, 1000);
})();

function ClockStart() {
  let time = new Date();

  spClockHour.textContent = String(time.getHours()).padStart(2, "0");
  spClockMin.textContent = String(time.getMinutes()).padStart(2, "0");
  spClockSec.textContent = String(time.getSeconds()).padStart(2, "0");

  setTimeout(ClockStart, 1000);
}

/////////////////////////////////////////
const liStopWatch = document.querySelector(".li-stop-watch");
const liClock = document.querySelector(".li-clock");
const liTodoList = document.querySelector(".li-todo-list");

const divMainStopWatch = document.querySelector(".main-list-stop-watch");
const divMainClock = document.querySelector(".main-list-clock");
const divMainTodoList = document.querySelector(".main-list-todo-list");

const divOne = document.querySelector(".one");

let cnt = 0;

liStopWatch.addEventListener("click", () => {
  divMainStopWatch.style.zIndex = 10000;
  divMainClock.style.zIndex = 1;
  divMainTodoList.style.zIndex = 1;
  divOne.click();
});

liClock.addEventListener("click", () => {
  divMainStopWatch.style.zIndex = 1;
  divMainClock.style.zIndex = 10000;
  divMainTodoList.style.zIndex = 1;
  divOne.click();
});

liTodoList.addEventListener("click", () => {
  divMainStopWatch.style.zIndex = 1;
  divMainClock.style.zIndex = 1;
  divMainTodoList.style.zIndex = 10000;
  divOne.click();
});
///////////////////////////////////////

const inputTodoList = document.querySelector(".todo-list-input");
const btnTodoList = document.querySelector(".todo-list-btn");
const listTodoList = document.querySelector(".todo-list-ul");

btnTodoList.addEventListener("click", () => {
  AddTodoList();
});

inputTodoList.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    AddTodoList();
  }
});

function AddTodoList() {
  const liEl = document.createElement("li");
  const inputEl = document.createElement("input");
  const pEl = document.createElement("p");
  const btnEl = document.createElement("button");

  inputEl.setAttribute("type", "checkbox");
  pEl.textContent = inputTodoList.value;
  btnEl.innerText = "❌";

  liEl.append(inputEl, pEl, btnEl);
  listTodoList.append(liEl);

  const li = listTodoList.querySelectorAll("li");
  li.forEach((element) => {
    btnEl.addEventListener("click", RemoveList);
    inputEl.addEventListener("click", CheckedList);
  });
}

function RemoveList(event) {
  const li = event.target.parentElement;
  li.remove();
}

// function CheckedList(event) {
//   if(event)
//   const li = event.target.parentElement;
//   console.log(li)
//   li.children.querySelector('p').style.textDecorationLine = "overline"
// }
