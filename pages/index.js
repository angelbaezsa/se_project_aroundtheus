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
const cardTemplate = document.querySelector("#card").content;
export const gallery = document.querySelector(".gallery");

import { FormValidation } from "../components/FormValidation.js";
export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: `.form__error-message`,
};

const myForms = [...document.querySelectorAll("form")];
myForms.forEach((form) => {
  const formValidation = new FormValidation(form, config);
  formValidation.enableValidation();
});

import { Card } from "../components/Card.js";
initialCards.forEach((cardElement) => {
  const card = new Card(cardElement, "#card");
  card._getPrototype();
});

//creates card and add it to initialCards array so it can be rendered
