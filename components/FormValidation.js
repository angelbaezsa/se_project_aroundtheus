import { config } from "../pages/index.js"; //imports config from pages folder
// const config = {
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__save-button",
//   inactiveButtonClass: "form__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: `.form__error-message`,
// };
export class FormValidation {
  constructor(form, config) {
    this._form = form;
    this._config = config;
  }

  //method activates validation on client side
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, validationMessage) {
    const errorElement = this._form.querySelector(
      `.form__${inputElement.name}-error-message`
    );
    errorElement.textContent = validationMessage;
  }
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(
      `.form__${inputElement.name}-error-message`
    );
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    this._button = this._form.querySelector(".form__button");
    if (this._hasInvalidInput()) {
      this._button.classList.add(config.inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(config.inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  _setEventListeners() {
    this._form.addEventListener("submit", this._toggleButtonState);
    this._inputList = [
      ...this._form.querySelectorAll(this._config.inputSelector),
    ];
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }
}
