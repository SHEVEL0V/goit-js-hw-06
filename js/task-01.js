const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
