let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
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

const closeButton = document.querySelector(".form__button-close"); //button that closes form
const editButton = document.querySelector(".profile__edit-button"); //button that opens form
const saveButton = document.querySelector(".form");

closeButton.addEventListener("click", closeModal);
editButton.addEventListener("click", openModal);
saveButton.addEventListener("submit", (event) => {
  event.preventDefault();
});

function closeModal() {
  var form = document.querySelector(".modal-box");
  form.setAttribute("style", "visibility: hidden");
}

function openModal() {
  var form = document.querySelector(".modal-box");
  form.setAttribute("style", "visibility: visible");
}
