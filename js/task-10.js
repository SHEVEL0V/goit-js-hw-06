function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const btnCreate = controlsEl.querySelector("button[data-create]");
const btnDestroy = controlsEl.querySelector("button[data-destroy]");
const input = controlsEl.querySelector("input");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    boxesEl.insertAdjacentHTML("beforeend", "<div></div>");
    boxesEl.lastChild.style.width = `${i * 10 + 30}px`;
    boxesEl.lastChild.style.height = `${i * 10 + 30}px`;
    boxesEl.lastChild.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
