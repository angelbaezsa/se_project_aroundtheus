// import { gallery } from "../pages";
import { photoViewerModal } from "../pages/index.js";
import { openModal } from "../utils/utils.js";

export class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content;
  }

  getElement() {
    this._cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    this._generateCard();
    return this._cardElement;
  }

  _generateCard() {
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(
      ".card__image"
    ).alt = `Photo of ${this._name}`;
    this._setEventListeners();
  }

  _setEventListeners() {
    this._cardPhoto = this._cardElement.querySelector(".card__image");
    this._cardPhoto.addEventListener("click", () => {
      openModal(photoViewerModal);
      this._modalBoxPhoto = photoViewerModal.querySelector(".modal-box__photo");
      this._modalBoxPhoto.src = this._link;
      this._modalBoxPhoto.alt = this._name;
      this._modalBoxPhotoTitle = photoViewerModal.querySelector(
        ".modal-box__photo-title"
      );
      this._modalBoxPhotoTitle.textContent = this._name;
    });
    // likeButton.addEventListener("click", () =>
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });
    // deleteCardButton.addEventListener("click", () => {
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
      console.log(this._deleteButton);
    });
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
}
