export class Modal {
  constructor(modalSelector) {
    this._modal = document.getElementById(modalSelector);
  }

  open() {
    this._modal.classList.add("modal-box_visible");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }
  close() {
    this._modal.classList.remove("modal-box_visible");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    evt.key === "Escape" ? this.close() : null;
  }

  setEventListeners() {
    this._modal
      .querySelector(".modal-box__button-close")
      .addEventListener("click", () => {
        this.close();
      });

    this._modal.addEventListener("click", (evt) => {
      evt.target === this._modal ? this.close() : null;
    });
  }
}
