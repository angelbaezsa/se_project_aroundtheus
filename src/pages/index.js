import { initialCards } from "../utils/constants.js";
import "../pages/index.css";
import { Card } from "../components/Card.js"; //imports Class Card from Components folder.
//Loop iterates over every element in the array and creates a card for every object stored in it.
import { Section } from "../components/Section.js";
import { FormValidation } from "../components/FormValidation.js"; //Import FormValidation Class from components folder.
import { ModalWithForm } from "../components/ModalWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { ModalWithPhoto } from "../components/ModalWithPhoto.js";
import { fillProfileForm } from "../utils/utils.js";

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
  ".gallery"
);
cardList.renderItems();

function createCard(cardObject) {
  const card = new Card(cardObject, "#card", previewCard);
  return card.getView();
}
// ------------------------------------------------------------------->

const editProfileModal = new ModalWithForm("modal-box_edit-profile", (evt) => {
  updateProfile(editProfileModal._getInputValues());
});
const addNewCardModal = new ModalWithForm("modal-box_add-card", () => {
  addNewCard(addNewCardModal._getInputValues());
});

const editButton = document.querySelector(".profile__edit-button"); //button that opens edit profile form
const addButton = document.querySelector(".profile__add-button"); //button that opend Add card form

editButton.addEventListener("click", () => {
  editProfileFormValidator.disableSubmitButton();
  fillProfileForm(userInfo.getUserInfo());
  editProfileModal.open();
});
addButton.addEventListener("click", () => {
  addNewCardFormValidator.disableSubmitButton();
  addNewCardModal.open();
});

export const userInfo = new UserInfo({
  userNameSelector: ".profile__heading",
  userOccupationSelector: ".profile__sub-heading",
});

export function updateProfile(profileObject) {
  const newName = profileObject["input-name"];
  const newOccupation = profileObject["input-description"];
  userInfo.setUserInfo(newName, newOccupation);
  editProfileFormValidator.disableSubmitButton();
  editProfileModal.close();
}

export function addNewCard(cardData) {
  const newCard = {
    name: cardData["input-place"],
    link: cardData["input-url"],
  };
  cardList.addItem(createCard(newCard));
  addNewCardModal.close();
}

const modalWithPhoto = new ModalWithPhoto("modal-box__photo-viewer");

export function previewCard(link, name) {
  modalWithPhoto.open(link, name);
}
