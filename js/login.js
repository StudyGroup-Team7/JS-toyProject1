const loginBtn = document.querySelector(".login-btn");
const loginTxt = document.querySelector(".login-txt");
const h2 = document.querySelector(".login-container h2");
const logOut = document.getElementById("log-out");

function loginSubmit(event) {
  event.preventDefault();
  const username = loginTxt.value;
  greetings(username);
  localStorage.setItem("username", username);
}
const loginForm = document.querySelector(".login-container");
loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem("username");
if (savedUsername !== null) {
  greetings(savedUsername);
}
function greetings(username) {
  loginTxt.classList.toggle("hide");
  loginBtn.classList.toggle("hide");
  h2.classList.toggle("hide");
  h2.textContent = `Welcome! 🌷 ${username}`;
}

logOut.addEventListener("click", (username) => {
  localStorage.removeItem(username);
  loginTxt.classList.toggle("hide");
  loginBtn.classList.toggle("hide");
  h2.classList.toggle("hide");
});
