let initialCards = [
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
// this code generates the gallery cards using JS and template
let cardTemplate = document.querySelector("#card").content;
let Gallery = document.querySelector(".gallery");

function createCards() {
  for (let i = 0; i < initialCards.length; i++) {
    let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__title").textContent =
      initialCards[i].name;
    cardElement.querySelector(".card__image").src = initialCards[i].link;
    Gallery.append(cardElement);
  }
}
createCards();

//----------------------------------------------------------------------------------------------------->
const closeButton = document.querySelector(".form__button-close"); //button that closes form
const editButton = document.querySelector(".profile__edit-button"); //button that opens form
const saveButton = document.querySelector(".form__save-button");
const form = document.querySelector(".form"); //button that saves changes in the profile

closeButton.addEventListener("click", closeModal);
editButton.addEventListener("click", openModal);
saveButton.addEventListener("click", updateProfile);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// returns the occupation on the profile
function getName() {
  let name = document.querySelector(".profile__heading").textContent;
  return name;
}

// returns the name on the profile
function getOccupation() {
  let occupation = document.querySelector(".profile__sub-heading").textContent;
  return occupation;
}

function formFiller(name, occupation) {
  console.log(name, occupation);
  document.querySelector(".form__input-name").value = name;
  document.querySelector(".form__input-description").value = occupation;
}

// closes modal div that contains form
function closeModal() {
  var form = document.querySelector(".modal-box");
  form.setAttribute("style", "visibility: hidden");
}
// opens modal div that contains form
function openModal() {
  var form = document.querySelector(".modal-box");
  form.setAttribute("style", "visibility: visible");
  formFiller(getName(), getOccupation());
}

// updates profile with new values if the input fields are not empty
function updateProfile() {
  let newName = document.querySelector(".form__input-name").value;
  let newOccupation = document.querySelector(".form__input-description").value;

  if (newName && newOccupation != "") {
    document.querySelector(".profile__heading").textContent = newName;
    document.querySelector(".profile__sub-heading").textContent = newOccupation;
  }

  closeModal();
}
