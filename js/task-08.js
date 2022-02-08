const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };

  // const formData = new FormData(event.currentTarget);

  email === "" || password === ""
    ? alert("All form fields must be completed !")
    : console.log(formData);

  event.currentTarget.reset();
}
