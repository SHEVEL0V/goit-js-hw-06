const inputEl = document.querySelector("#validation-input");

const lengthAttr = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== lengthAttr) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.replace("invalid", "valid");
  }
});
