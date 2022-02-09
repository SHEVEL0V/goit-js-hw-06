const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.children.length}`);

itemsEl.forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].childElementCount}`);
});
