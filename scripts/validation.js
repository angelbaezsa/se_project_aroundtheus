const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formElements = [...document.querySelectorAll(".form")];
const formInputs = [...document.querySelectorAll(".form__input")];

function checkInputValidity(input, formElement) {
  const txtField = input;
  if (!input.validity.valid) {
    document.querySelector(`.${input.name}_error-message`).textContent =
      input.validationMessage;
  } else {
    document.querySelector(`.${input.name}_error-message`).textContent = "";
  }
}

function setEventListeners(formElement) {
  formInputs.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      checkInputValidity(formInput, formElement);
    });
  });
}

function enableValidation(configuration) {
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement);
  });
}

enableValidation(config);
