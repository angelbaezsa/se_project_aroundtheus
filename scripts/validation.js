const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: `.form__error-message`,
};

// const formInputs = [...document.querySelectorAll(".form__input")];
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(
    `.form__${inputElement.name}-error-message`
  );
  // inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  // errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(
    `.form__${inputElement.name}-error-message`
  );
  // inputElement.classList.remove("form__input_type_error");
  // errorElement.classList.remove();
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, config) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);
  formElement.addEventListener("submit", () => {
    toggleButtonState(inputList, buttonElement, config);
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

enableValidation(config);

// const formSaveButtons = document.querySelectorAll(".form__button");

// function checkInputValidity(input, formElement) {
//   const txtField = input;
//   if (!input.validity.valid) {
//     document.querySelector(`.form__${input.name}-error-message`).textContent =
//       input.validationMessage;
//     const form = document.querySelector(
//       `.form__${input.name}-error-message`
//     ).parentElement;
//     const currentButton = form.querySelector(".form__save-button");
//     currentButton.disabled = true;
//     currentButton.classList.add("form__button_disabled");
//   } else {
//     document.querySelector(`.form__${input.name}-error-message`).textContent =
//       "";
//     const form = document.querySelector(
//       `.form__${input.name}-error-message`
//     ).parentElement;
//     const currentButton = form.querySelector(".form__save-button");
//     currentButton.disabled = false;
//     currentButton.classList.remove("form__button_disabled");
//   }
// }

// function setEventListeners(formElement) {
//   formInputs.forEach((formInput) => {
//     formInput.addEventListener("input", () => {
//       checkInputValidity(formInput, formElement);
//     });
//   });
// }

// function enableValidation(configuration) {
//   formElements.forEach((formElement) => {
//     formElement.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// }

// enableValidation(config);

// const formElements = [...document.querySelectorAll(config.formSelector)];
// const formInputs = [...document.querySelectorAll(config.inputSelector)];
// const formSaveButtons = document.querySelectorAll(config.submitButtonSelector);

// function checkInputValidity(input, formElement) {
//   const txtField = input;
//   if (!input.validity.valid) {
//     document.querySelector(`.form__${input.name}-error-message`).textContent =
//       input.validationMessage;
//     const form = document.querySelector(
//       `.form__${input.name}-error-message`
//     ).parentElement;
//     const currentButton = form.querySelector(config.submitButtonSelector);
//     currentButton.disabled = true;
//     currentButton.classList.add(config.inactiveButtonClass);
//   } else {
//     document.querySelector(`.form__${input.name}-error-message`).textContent =
//       "";
//     const form = document.querySelector(
//       `.form__${input.name}-error-message`
//     ).parentElement;
//     const currentButton = form.querySelector(config.submitButtonSelector);
//     currentButton.disabled = false;
//     currentButton.classList.remove(config.inactiveButtonClass);
//   }
// }

// function setEventListeners(formElement) {
//   formInputs.forEach((formInput) => {
//     formInput.addEventListener("input", () => {
//       checkInputValidity(formInput, formElement);
//     });
//   });
// }

// function enableValidation(configuration) {
//   formElements.forEach((formElement) => {
//     formElement.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// }

// enableValidation(config);
