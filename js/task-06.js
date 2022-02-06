const inputEl = document.querySelector("#validation-input");

const lengthAttr = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove("invalid", "valid");
  } else if (event.currentTarget.value.length === lengthAttr) {
    inputEl.classList.replace("invalid", "valid");
  } else inputEl.classList.add("invalid");
});
