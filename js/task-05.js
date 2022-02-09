const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (text) => {
  output.textContent =
    input.value.length !== 0 ? text.currentTarget.value : "Anonymous";
});
