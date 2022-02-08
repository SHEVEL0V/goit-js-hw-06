const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");
const valueEl = document.querySelector("#value");

let value = 0;

btnDecrement.addEventListener("click", () => {
  --value;
  valueEl.textContent = value;
});
btnIncrement.addEventListener("click", () => {
  ++value;
  valueEl.textContent = value;
});
