export class Card {
  constructor(
    { name, link, _id, owner, likes },
    cardSelector,
    previewCard,
    { handleDelete },
    { handleLikeCallback, handleDislikeCallback }
  ) {
    this._name = name;
    this._link = link;
    this._ownerId = owner._id;
    this._cardId = _id;
    this._owner = owner.name;
    this._cardLikes = likes.length;
    this._cardLikesArray = likes;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    this._previewCard = previewCard;
    this._handleDelete = handleDelete;
    this._handleLikeCallback = handleLikeCallback;
    this._handleDislikeCallback = handleDislikeCallback;
    this._isLiked;
  }

  _getElement() {
    this._clonedCard = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    return this._clonedCard;
  }

  getView() {
    // console.log(this._ownerId, this._owner, this._cardId, this._cardLikes);
    this._cardElement = this._getElement();
    this._setAttributes();
    this._setEventListeners();
    if (this._ownerId !== "b467d8eeb238431481a2ba2b") {
      this._deleteButton.remove();
    }

    if (this._cardLikes < 1) {
      this._cardElement.querySelector(".card__likes-counter").textContent = "";
    }

    return this._cardElement;
  }

  _setAttributes() {
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(
      ".card__image"
    ).alt = `Photo of ${this._name}`;
    this._cardElement.querySelector(".card__likes-counter").textContent =
      this._cardLikes;
    // this._owner == !"Angel Baez" ? this._deleteButton.remove() : null;
    console.log(this._cardLikesArray);
    this._cardLikesArray.forEach((element) => {
      // console.log(element);
      if (element._id == "b467d8eeb238431481a2ba2b") {
        console.log(`you liked this card ${(element.name, element._id)}`);
        this._cardElement
          .querySelector(".card__like-button")
          .classList.add("card__like-button_active");
        this._isLiked = true;
      }
    });

    //the code below evaluates is the card was liked by owner
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
    this._deleteButton.addEventListener("click", this._handleDelete);
  }

  deleteCard() {
    console.log("you pressed this delete button");
    // this._handleDelete.setEventListeners();
    // this._handleDelete.open();
    this._cardElement.remove();
    this._cardElement = null;
  }

  refreshLikesCount(likesCount) {
    likesCount < 1
      ? (this._cardElement.querySelector(".card__likes-counter").textContent =
          "")
      : (this._cardElement.querySelector(".card__likes-counter").textContent =
          likesCount);
  }

  _handleLike() {
    if (this._isLiked) {
      this._handleDislikeCallback();
      this.dislike();
    } else if (!this._isLiked) {
      this._handleLikeCallback();
      this.addLike();
    }

    // this._handleLikeFunction;
    // this._likeButton.classList.toggle("card__like-button_active");
  }

  addLike() {
    this._likeButton.classList.add("card__like-button_active");
    this._isLiked = true;
  }
  dislike() {
    this._likeButton.classList.remove("card__like-button_active");
    this._isLiked = false;
  }
}
