const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (text) => {
  input.value.length !== 0
    ? (output.textContent = text.currentTarget.value)
    : (output.textContent = "Anonymous");
});
