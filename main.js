
const groupName = ["박희수", "임성열", "이혜원", "표승연", "이승용", "정소진"];
const galleryItems = document.querySelectorAll(".gallery-item")

Array.from(galleryItems).forEach( (item, index) => {
  item.setAttribute("data-value", `${groupName[index]}`)
})