// STOPWATCH

let min = 0;
let sec = 0;
let tens = 0;

const appendMin = document.querySelector(".min");
const appendSec = document.querySelector(".sec");
const appendTens = document.querySelector(".tens");
const buttonStart = document.querySelector(".btn-start");
const buttonStop = document.querySelector(".btn-stop");
const buttonReset = document.querySelector(".btn-reset");

const stopwatch = document.querySelector(".stopwatch");
const menuStopwatch = document.querySelector("#menu-stopwatch");
const menu = document.querySelector(".menu");
const toggleMenuElement = document.querySelector(".toggle-menu");
const toggleBar = document.querySelector("#toggle-bar");

let activeMenu = "";

let intervalId;

function operateTimer() {
  tens++;
  appendTens.textContent = tens > 9 ? tens : "0" + tens;

  if (tens > 99) {
    sec++;
    appendSec.textContent = sec = sec > 9 ? sec : "0" + sec;
    tens = 0;
    appendTens.textContent = "00";
  }

  if (sec > 59) {
    min++;
    appendMin.textContent = min = min > 9 ? min : "0" + min;
    sec = 0;
    appendSec.textContent = "00";
  }
}

buttonStart.onclick = () => {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
};

buttonStop.onclick = () => {
  clearInterval(intervalId);
};

buttonReset.onclick = () => {
  clearInterval(intervalId);
  tens = 0;
  sec = 0;
  min = 0;
  appendTens.textContent = "00";
  appendSec.textContent = "00";
  appendMin.textContent = "00";
};

const hideMenu = () => {
  menu.style.display = "none";
};

const showMenu = () => {
  menu.style.display = "block";
};

const toggleMenu = () => {
  hide();
  showMenu();
};

const hide = () => {
  switch (activeMenu) {
    case "stopwatch":
      stopwatch.style.display = "none";
      break;
    case "clock":
      clock.style.display = "none";
      break;
    case "todo":
      toDoList.style.display = "none";
      break;
    default:
      break;
  }
};

const showStopwatch = () => {
  hideMenu();
  stopwatch.style.display = "block";
  activeMenu = "stopwatch";
};

menuStopwatch.addEventListener("click", showStopwatch);

// CLOCK

const clock = document.querySelector(".clock");
const menuClock = document.querySelector("#menu-clock");

const showClock = () => {
  hideMenu();
  clock.style.display = "flex";
  activeMenu = "clock";
};

menuClock.addEventListener("click", showClock);

function getTime() {
  let time = new Date();
  clock.textContent = time;
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (hour > 12) {
    hour = hour - 12;
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  clock.textContent =
    hour < 12
      ? `${hour} : ${minute} : ${second} pm`
      : `${hour} : ${minute} : ${second} am`;
}

getTime();
setInterval(getTime, 1000);

// to-do list

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const toDoList = document.querySelector(".to-do-list");
const menuToDo = document.querySelector("#menu-to-do");

const showToDoList = () => {
  hideMenu();
  toDoList.style.display = "flex";
  activeMenu = "todo";
};

menuToDo.addEventListener("click", showToDoList);

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();

  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const div = document.createElement("div");

    div.innerText = todo.text;
    button.innerText = "✕";
    button.addEventListener("click", delItem);

    li.append(div, button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();

  input.value = "";
};

form.addEventListener("submit", handler);

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });

    todos = userTodos;
  }
};

window.onload = () => {
  init();
};

const activeElements = document.querySelectorAll(".active-element");

const act = () => {
  for (let activeted = 0; activeted < activeElements.length; activeted++) {
    activeElements[activeted].classList.toggle("active");
  }
};

let activeToggle = toggleBar.addEventListener("click", act);
