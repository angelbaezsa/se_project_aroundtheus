const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function enableValidation(configuration) {
  const formelements = [...document.querySelectorAll(".form")];
  console.log(formelements);
}

enableValidation(config);
