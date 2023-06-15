export class Card {
  constructor({ name, link }, cardSelector, previewCard) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    this._previewCard = previewCard;
  }

  _getElement() {
    this._clonedCard = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    return this._clonedCard;
  }

  getView() {
    this._cardElement = this._getElement();
    this._setAttributes();
    this._setEventListeners();
    return this._cardElement;
  }

  _setAttributes() {
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(
      ".card__image"
    ).alt = `Photo of ${this._name}`;
  }

  _viewCard() {
    // previewCard(this._link, this._name);
    this._previewCard(this._link, this._name);
  }

  _setEventListeners() {
    this._cardPhoto = this._cardElement.querySelector(".card__image");

    this._cardPhoto.addEventListener("click", () => {
      this._viewCard();
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
