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

const editButton = document.querySelector(".profile__edit-button"); //button that opens edit profile form
const addButton = document.querySelector(".profile__add-button"); //button that opend Add card form
const photoViewerModal = document.querySelector("#modal-box__photo-viewer"); //this is the modal that shows the big pictures once clicked
const photoViewerCloseButton = photoViewerModal.querySelector(
  ".modal-box__button-close"
);
const editModal = document.getElementById("modal-box_edit-profile"); //Edit form modal
const editModalCloseButton = editModal.querySelector(
  ".modal-box__button-close"
);

//this event listener triggers when you clicked outside of the form
photoViewerModal.addEventListener("click", (evt) => closeModal(evt.target));
//this event listener triggers when you clicked outside of the form
editModal.addEventListener("click", (evt) => closeModal(evt.target));

const addCardModal = document.getElementById("modal-box_add-card"); //add card modal
console.log(addCardModal);
const addCardModalCloseButton = addCardModal.querySelector(
  ".modal-box__button-close"
);

//this event listener triggers when you clicked outside of the form
addCardModal.addEventListener("click", (evt) => closeModal(evt.target));

const addCardForm = addCardModal.querySelector(".form"); //represents the form inside the add Card modal
console.log(addCardForm);
const editProfileForm = editModal.querySelector(".form"); //represents the form inside the profile modal

editModalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});
//close modal passing parameter to functions that tells which modal should be closed
//close modal passing parameter to functions that tells which modal should be closed
addCardModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});
//close modal passing parameter to functions that tells which modal should be closed
photoViewerCloseButton.addEventListener("click", () => {
  closeModal(photoViewerModal);
});

editButton.addEventListener("click", () => {
  openModal(editModal);
  fillProfileForm(getName(), getOccupation());
});
addButton.addEventListener("click", () => {
  openModal(addCardModal);
});

editProfileForm.addEventListener("submit", updateProfile);
addCardForm.addEventListener("submit", addNewCard);

// returns the occupation on the profile
function getName() {
  const name = document.querySelector(".profile__heading").textContent;
  return name;
}

// returns the name on the profile
function getOccupation() {
  const occupation = document.querySelector(
    ".profile__sub-heading"
  ).textContent;
  return occupation;
}

function fillProfileForm(name, occupation) {
  document.querySelector(".form__input_name").value = name;
  document.querySelector(".form__input_description").value = occupation;
}

// closes modal div that contains form
function closeModal(modal) {
  modal.classList.remove("modal-box_visible");
  document.removeEventListener("keydown", closeByEscape);
}
// opens modal div that contains form
const openModal = (modal) => {
  modal.classList.add("modal-box_visible");
  // fillprofileForm(getName(), getOccupation());
  document.addEventListener("keydown", closeByEscape);
};

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal-box_visible");
    closeModal(openedPopup);
  } else {
  }
}

// updates profile with new values if the input fields are not empty
function updateProfile(event) {
  const newName = document.querySelector(".form__input_name").value;
  const newOccupation = document.querySelector(
    ".form__input_description"
  ).value;
  event.preventDefault();
  document.querySelector(".profile__heading").textContent = newName;
  document.querySelector(".profile__sub-heading").textContent = newOccupation;
  editProfileForm.reset();
  closeModal(editModal);
}

//creates card and add it to initialCards array so it can be rendered
function addNewCard(event) {
  event.preventDefault();

  const cardName = addCardModal.querySelector("#form__input-place").value;
  const hyperlink = addCardModal.querySelector("#form__input_url").value;

  const newCard = {
    name: cardName,
    link: hyperlink,
  };

  const cardElement = createCard(newCard);
  gallery.prepend(cardElement);

  addCardForm.reset();
  closeModal(addCardModal);
}
