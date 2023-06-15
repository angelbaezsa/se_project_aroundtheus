export class FormValidation {
  constructor(form, config) {
    this._form = form;
    this._config = config;
    this._button = this._form.querySelector(this._config.submitButtonSelector);
    this._inputList = [
      ...this._form.querySelectorAll(this._config.inputSelector),
    ];
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

  disableSubmitButton() {
    this._button.classList.add(this._config.inactiveButtonClass);
    this._button.disabled = true;
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._button.classList.remove(this._config.inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }
}
