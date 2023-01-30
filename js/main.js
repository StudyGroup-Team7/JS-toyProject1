const ulEl = document.querySelector("ul");
const hamburgerMenuEl = document.querySelector(".hamburger-icon");
hamburgerMenuEl.addEventListener("click", () => {
  ulEl.classList.toggle("active");
});

const groupName = ["박희수", "임성열", "이혜원", "표승연", "이승용", "정소진"];
const galleryItems = document.querySelectorAll(".gallery-item")
console.log('test')
Array.from(galleryItems).forEach( item, index => {
  const itemAfter = window.getComputedStyle(item, "::after");
  itemAfter.setProperty.content = `${groupName[index]}`
  console.dir(itemAfter)
  console.log(groupName[index])
})