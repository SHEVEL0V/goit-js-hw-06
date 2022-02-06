const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const areyEl = [];

for (const ingredient of ingredients) {
  let itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  areyEl.push(itemEl);
}

ingredientsEl.append(...areyEl);
