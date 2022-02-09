const boxesEl = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
  input.value = "";
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const dimensionsFirstItem = 30;
  const stepNextEl = 10;

  const createElements = [];
  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement("div");
    el.style.width = `${i * stepNextEl + dimensionsFirstItem}px`;
    el.style.height = `${i * stepNextEl + dimensionsFirstItem}px`;
    el.style.backgroundColor = getRandomHexColor();
    createElements.push(el);
  }
  boxesEl.append(...createElements);
}

function destroyBoxes() {
  input.value = "";
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
