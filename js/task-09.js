const buttonEl = document.querySelector(".change-color");
const colorMeaning = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorMeaning.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
