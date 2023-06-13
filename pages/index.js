const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

import { Card } from "../components/Card.js"; //imports Class Card from Components folder.
//Loop iterates over every element in the array and creates a card for every object stored in it.
import { Section } from "../components/Section.js";
import { FormValidation } from "../components/FormValidation.js"; //Import FormValidation Class from components folder.
import { closeModal, openModal } from "../utils/utils.js";
import { ModalWithForm } from "../components/ModalWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { ModalWithPhoto } from "../components/ModalWithPhoto.js";

export const gallery = document.querySelector(".gallery"); //Export gallery element
//exports config
export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: `.form__error-message`,
};

//These lines add the function of for validation.
const editProfileFormValidator = new FormValidation(
  document.querySelector(".form_edit-bio"),
  config
);
const addNewCardFormValidator = new FormValidation(
  document.querySelector(".form_add-new-card"),
  config
);

editProfileFormValidator.enableValidation();
addNewCardFormValidator.enableValidation();

const cardList = new Section(
  { items: initialCards, renderer: createCard },
  gallery
);
cardList.renderItems();

function createCard(cardObject) {
  const card = new Card(cardObject, "#card");
  return card.getView();
}
// ------------------------------------------------------------------->

const editProfileModal = new ModalWithForm("modal-box_edit-profile", (evt) => {
  updateProfile(evt);
});
const addNewCardModal = new ModalWithForm("modal-box_add-card", () => {
  addNewCard();
});

const editButton = document.querySelector(".profile__edit-button"); //button that opens edit profile form
const addButton = document.querySelector(".profile__add-button"); //button that opend Add card form

editButton.addEventListener("click", () => {
  editProfileModal.open();
});
addButton.addEventListener("click", () => {
  addNewCardModal.open();
});

const userInfo = new UserInfo({
  userNameSelector: ".profile__heading",
  userOccupationSelector: ".profile__sub-heading",
});

export function updateProfile(event) {
  const newName = document.querySelector(".form__input_name").value;
  const newOccupation = document.querySelector(
    ".form__input_description"
  ).value;
  userInfo.setUserInfo(newName, newOccupation);
  editProfileFormValidator.disableSubmitButton();
  editProfileModal.close();
}

export function addNewCard() {
  const addCardModal = document.getElementById("modal-box_add-card");
  const cardName = addCardModal.querySelector("#form__input-place").value;
  const hyperlink = addCardModal.querySelector("#form__input_url").value;

  const newCard = {
    name: cardName,
    link: hyperlink,
  };

  gallery.prepend(createCard(newCard));

  addNewCardFormValidator.disableSubmitButton();
  addNewCardModal.close();
}

const modalWithPhoto = new ModalWithPhoto("#modal-box__photo-viewer");

export function previewCard(link, name) {
  modalWithPhoto.open(link, name);
}
