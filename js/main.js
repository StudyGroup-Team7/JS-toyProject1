const ulEl = document.querySelector("ul");
const hamburgerMenuEl = document.querySelector(".hamburger-icon");
hamburgerMenuEl.addEventListener("click", () => {
  ulEl.classList.toggle("active");
});
