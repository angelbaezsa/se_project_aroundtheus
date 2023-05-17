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
