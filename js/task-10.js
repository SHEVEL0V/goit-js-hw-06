const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const btnCreate = controlsEl.querySelector("button[data-create]");
const btnDestroy = controlsEl.querySelector("button[data-destroy]");
const input = controlsEl.querySelector("input");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
  input.value = "";
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const createElements = [];
  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement("div");
    el.style.width = `${i * 10 + 30}px`;
    el.style.height = `${i * 10 + 30}px`;
    el.style.backgroundColor = getRandomHexColor();
    createElements.push(el);
  }
  boxesEl.append(...createElements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
