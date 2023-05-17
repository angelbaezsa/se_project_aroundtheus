// import { gallery } from "../pages";

export class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content;
  }

  _getPrototype() {
    this._cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    this.generateCard();
  }

  generateCard() {
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._setEventListeners();
    return this._cardElement;
  }

  _renderCard() {
    const gallery = document.querySelector(".gallery");
    gallery.prepend(this._cardElement);
  }

  _setEventListeners() {
    // cardPhoto.addEventListener("click", () => {\

    this._cardPhoto = this._cardElement.querySelector(".card__image");
    this._cardPhoto.addEventListener("click", () => {
      // this._handleClick();
      alert("cardPhoto is working");
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
    this._renderCard(this._cardElement);
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
}
