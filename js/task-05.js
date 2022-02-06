const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (text) => {
  if (input.value.length !== 0) {
    return (output.textContent = text.currentTarget.value);
  }
  return (output.textContent = "Anonymous");
});
