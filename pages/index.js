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
// this code generates the gallery cards using JS and templatemodal-box__button-close
//const cardTemplate = document.querySelector("#card").content;

import { FormValidation } from "../components/FormValidation.js"; //Import FormValidation Class from components folder.
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
(function validateForms() {
  const editProfileForm = new FormValidation(
    document.querySelector(".form__edit-profile"),
    config
  );
  const addNewCardForm = new FormValidation(
    document.querySelector(".form__add-new-card"),
    config
  );

  editProfileForm.enableValidation();
  addNewCardForm.enableValidation();
})();

import { Card } from "../components/Card.js"; //imports Class Card from Components folder.

//Loop iterates over every element in the array and creates a card for every object stored in it.
initialCards.forEach((cardElement) => {
  const card = new Card(cardElement, "#card");
  renderCard(card.getElement());
});

//functions to insert cards into HTML gallery.
function renderCard(cardElement) {
  gallery.prepend(cardElement);
}
