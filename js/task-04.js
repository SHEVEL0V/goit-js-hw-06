const counterEl = document.querySelector("#counter");

const btnDecrement = counterEl.querySelector("button[data-action='decrement']");
const btnIncrement = counterEl.querySelector("button[data-action='increment']");
const valueEl = counterEl.querySelector("#value");

let value = 0;

btnDecrement.addEventListener("click", () => {
  --value;
  valueEl.textContent = value;
});
btnIncrement.addEventListener("click", () => {
  ++value;
  valueEl.textContent = value;
});
