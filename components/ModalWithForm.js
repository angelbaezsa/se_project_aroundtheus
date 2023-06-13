import { config } from "../pages/index.js";
import { Modal } from "./modal.js";
export class ModalWithForm extends Modal {
  constructor(modalSelector, submitEventHandler) {
    super(modalSelector);
    this._form = this._modal.querySelector(".form");
    this._submitEventHandler = submitEventHandler;
    this._inputList = [...this._form.querySelectorAll(config.inputSelector)]; //config is targetting the input selectors
    this.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }

  _getInputValues() {
    const inputsData = {};
    this._inputList.forEach((input) => {
      inputsData.input = input.value;
    });
    return inputsData;
  }

  setEventListeners() {
    super.setEventListeners();
    (evt) => {
      evt.preventDefault();
    };
    this._form.addEventListener("submit", this._submitEventHandler);
    const closeButton = this._modal.querySelector(".modal-box__button-close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}

// !Create PopupWithForm as a child class of Popup. The PopupWithForm class must comply with the following
// !requirements:
// !It takes two arguments: the popup selector, and a callback function which PopupWithForm calls when
// !the form’s submit event fires.
// !It stores a private method named _getInputValues(), which collects data from all the input
//!! fields and returns that data as an object.
//! It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm
// !class has to add the submit event
// !handler to the form and the click event listener to the close icon.
// !It modifies the close() parent method in order to reset the form once the popup is closed.
// Create an instance of the PopupWithForm class for each popup.
