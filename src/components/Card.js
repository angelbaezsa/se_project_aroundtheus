export class Card {
  constructor(
    { name, link, _id, owner },
    cardSelector,
    previewCard,
    handleDelete
  ) {
    this._name = name;
    this._link = link;
    this._ownerId = owner._id;
    this._cardId = _id;
    this._owner = owner.name;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    this._previewCard = previewCard;
    this._handleDelete = handleDelete;
  }

  _getElement() {
    this._clonedCard = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    return this._clonedCard;
  }

  getView() {
    console.log(this._ownerId, this._owner, this._cardId);
    this._cardElement = this._getElement();
    this._setAttributes();
    this._setEventListeners();
    if (this._ownerId !== "b467d8eeb238431481a2ba2b") {
      this._deleteButton.remove();
    }
    return this._cardElement;
  }

  _setAttributes() {
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(
      ".card__image"
    ).alt = `Photo of ${this._name}`;

    this._owner == !"Angel Baez" ? this._deleteButton.remove() : null;
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
      this.deleteCard();
    });
  }

  deleteCard() {
    console.log("you pressed this delete button");
    this._handleDelete.setEventListeners();
    this._handleDelete.open();
    // this._cardElement.remove();
    // this._cardElement = null;
  }

  _handleLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
}
