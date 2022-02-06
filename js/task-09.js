function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
});
