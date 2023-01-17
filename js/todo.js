const todoForm = document.querySelector(".todo-container");
const todoTxt = document.querySelector(".todo-txt");
const todoBtn = document.querySelector("todo-btn");
const todoList = document.querySelector(".todo-list");

let toDos = [];

function saveTodos() {
  localStorage.setItem("toDos", toDos);
}
function todoSubmit(event) {
  event.preventDefault();
  const task = todoTxt.value;
  todoTxt.value = "";
  const taskObj = {
    task,
    id: Date.now(),
  };
  toDos.push(taskObj);
  paintTodo(taskObj);
  saveTodos();
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", todoSubmit);

// 새로운 할 일 추가 & 삭제 버튼 구현
function paintTodo(taskObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", deleteTodo);
  span.textContent = taskObj.task;
  button.textContent = "❌";
  li.append(span);
  li.append(button);
  todoList.append(li);
}

// ❌버튼 클릭 시 할 일 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

const getTodos = localStorage.getItem("toDos");

if (getTodos !== null) {
  const parsedTodos = JSON.parse(getTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
