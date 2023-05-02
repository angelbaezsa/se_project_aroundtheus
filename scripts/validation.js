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
const formSaveButtons = document.querySelectorAll(".form__button");

function checkInputValidity(input, formElement) {
  const txtField = input;
  if (!input.validity.valid) {
    document.querySelector(`.${input.name}__error-message`).textContent =
      input.validationMessage;
    const form = document.querySelector(
      `.${input.name}__error-message`
    ).parentElement;
    const currentButton = form.querySelector(".form__save-button");
    currentButton.disabled = true;
    currentButton.classList.add("form__button_disabled");
  } else {
    document.querySelector(`.${input.name}__error-message`).textContent = "";
    const form = document.querySelector(
      `.${input.name}__error-message`
    ).parentElement;
    const currentButton = form.querySelector(".form__save-button");
    currentButton.disabled = false;
    currentButton.classList.remove("form__button_disabled");
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
