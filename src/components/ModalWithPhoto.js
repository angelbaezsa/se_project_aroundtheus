import { Modal } from "./modal.js";

export class ModalWithPhoto extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._modalPhoto = this._modal.querySelector(".modal-box__photo");
    this._modalPhotoTitle = this._modal.querySelector(
      ".modal-box__photo-title"
    );
    super.setEventListeners();
  }

  open(url, title) {
    super.open();
    this._modalPhoto.src = url;
    this._modalPhotoTitle.textContent = title;
    this._modalPhoto.alt = `Photo of ${title}`;
  }
}
