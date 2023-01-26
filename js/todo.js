const todoForm = document.querySelector(".todo-container");
const todoTxt = document.querySelector(".todo-txt");
const todoBtn = document.querySelector("todo-btn");
const todoList = document.querySelector(".todo-list");

let toDos = [];

function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
function todoSubmit(event) {
  event.preventDefault();
  const task = todoTxt.value;
  if (!task) {
    alert("plz fill in the blank");
    return;
  }
  todoTxt.value = "";
  const taskObj = {
    task,
    id: Date.now(),
  };
  toDos.push(taskObj);
  saveTodos();
  paintTodo(taskObj);
}

/** 새로운 할 일 추가 & 삭제 버튼 구현*/
function paintTodo(taskObj) {
  const li = document.createElement("li");
  li.id = taskObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", deleteTodo);
  span.textContent = taskObj.task;
  button.textContent = "delete";
  li.append(span);
  li.append(button);
  todoList.append(li);
}

// 삭제버튼 클릭 시 할 일 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);

const getTodos = localStorage.getItem("toDos");

if (getTodos !== null) {
  const parsedTodos = JSON.parse(getTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
