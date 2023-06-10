export class Modal {
  constructor(modalSelector) {
    this._modal = document.getElementById(modalSelector);
  }

  open() {
    this._modal.classList.add("modal-box_visible");
    this.setEventListeners();
  }

  close() {
    this._modal.classList.remove("modal-box_visible");
    this._modal.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    evt.key === "Escape" ? this.close() : null;
  }

  setEventListeners() {
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
