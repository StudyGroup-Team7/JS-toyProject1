const todoForm = document.querySelector(".todo-container");
const todoTxt = document.querySelector(".todo-txt");
const todoBtn = document.querySelector("todo-btn");
const todoList = document.querySelector(".todo-list");

const toDos = [];

function saveTodos() {
  localStorage.setItem("toDos", toDos);
}
function todoSubmit(event) {
  event.preventDefault();
  const task = todoTxt.value;
  todoTxt.value = "";
  toDos.push(task);
  paintTodo(task);
  saveTodos(task);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", todoSubmit);

// 새로운 할 일 추가 & 삭제 버튼 구현
function paintTodo(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", deleteTodo);
  span.textContent = task;
  button.textContent = "❌";
  li.append(span);
  li.append(button);
  todoList.append(li);
}

// ❌버튼 클릭 시 할 일 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

const savedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(savedTodos);
// if (saveTodos !== null) {
//   saveTodos.forEach((item) => console.log(`${item}`));
// }
