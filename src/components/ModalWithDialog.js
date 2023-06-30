import { Modal } from "./modal";

export class ModalWithDialog extends Modal {
  constructor(selector, handleEventSubmit) {
    super(selector);
    this._handleEventSubmit = handleEventSubmit;
    this._enableSubmit();
  }

  _enableSubmit() {
    this._form = this._modal.querySelector(".form");
    this._form.addEventListener("submit", this._handleEventSubmit.deleteCard());
  }
}
