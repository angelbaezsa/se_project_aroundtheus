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
const gallery = document.querySelector(".gallery");

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardData.name;
  const cardPhoto = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardPhoto.src = cardData.link;
  cardPhoto.alt = `photo of ${cardData.name}`;

  cardPhoto.addEventListener("click", () => {
    const picture = cardPhoto.closest(".card__image");
    const title = cardPhoto.parentElement;

    const modalBoxPhoto = photoViewerModal.querySelector(".modal-box__photo");
    const modalBoxPhotoTitle = document.querySelector(
      ".modal-box__photo-title"
    );
    openModal(photoViewerModal);
    modalBoxPhoto.src = picture.src;
    modalBoxPhotoTitle.textContent = `${title.textContent}`;
  });

  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("card__like-button_active")
  );

  return cardElement;
}

// this method calls the create card method passing each of the card elements
function renderCards() {
  // clearGallery();
  initialCards.forEach((element) => {
    const cardElement = createCard(element);
    gallery.prepend(cardElement);
  });
}

renderCards();

//----------------------------------------------------------------------------------------------------->
const editButton = document.querySelector(".profile__edit-button"); //button that opens edit profile form
const addButton = document.querySelector(".profile__add-button"); //button that opend Add card form

const deleteCardButtons = document.querySelectorAll(".card__delete-button");
const photoViewerModal = document.querySelector("#modal-box__photo-viewer"); //this is the modal that shows the big pictures once clicked
const cardPhotos = document.querySelectorAll(".card__image"); //this represents all the card pictures
const photoViewerCloseButton = photoViewerModal.querySelector(
  ".modal-box__button-close"
);
const editModal = document.getElementById("modal-box_edit-profile"); //Edit form modal
const editModalCloseButton = editModal.querySelector(
  ".modal-box__button-close"
);
const addCardModal = document.getElementById("modal-box_add-card"); //add card modal
const addCardModalCloseButton = addCardModal.querySelector(
  ".modal-box__button-close"
);
const addCardForm = addCardModal.querySelector(".form"); //represents the form inside the add Card modal
const editProfileForm = editModal.querySelector(".form"); //represents the form inside the profile modal

editModalCloseButton.addEventListener("click", () => closeModal(editModal)); //close modal passing parameter to functions that tells which modal should be closed
//close modal passing parameter to functions that tells which modal should be closed
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);
//close modal passing parameter to functions that tells which modal should be closed
photoViewerCloseButton.addEventListener("click", () =>
  closeModal(photoViewerModal)
);

editButton.addEventListener("click", () => openModal(editModal));
addButton.addEventListener("click", () => openModal(addCardModal));
// likeButtons.addEventListener("click", () =>
//   likeButtons.classList.toggle("card__like-button_active")
// );

//these lines of code add the function `like` to every button

// these lines of code add events listeners to all cards to open photo viewer modal and
// cardPhotos.forEach((cardPhoto) =>
//   cardPhoto.addEventListener("click", () => {
//     const picture = cardPhoto.closest(".card__image");
//     // const title = cardPhoto.querySelector(".card__title");
//     const title = cardPhoto.parentElement;
//     console.log(cardPhoto);
//     const modalBoxPhoto = photoViewerModal.querySelector(".modal-box__photo");
//     const modalBoxPhotoTitle = document.querySelector(
//       ".modal-box__photo-title"
//     );
//     openModal(photoViewerModal);
//     modalBoxPhoto.src = picture.src;
//     modalBoxPhotoTitle.textContent = `${title.textContent}`;
//   })
// );

deleteCardButtons.forEach((deleteCardButton) =>
  deleteCardButton.addEventListener("click", () => {
    const thisCard = deleteCardButton.closest(".card");
    thisCard.remove();
  })
);

// deleteCardButtons.forEach((deleteCardButton) => {
//   deleteCardButton.addEventListener("click", () => {
//     const thisCard = deleteCardButton.closest(".card");
//     thisCard.remove();
//   });
// });

editProfileForm.addEventListener("submit", updateProfile);
addCardForm.addEventListener("submit", addNewCardForm);

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

function fillForm(name, occupation) {
  document.querySelector(".form__input_name").value = name;
  document.querySelector(".form__input_description").value = occupation;
}

// closes modal div that contains form
function closeModal(modal) {
  modal.classList.toggle("modal-box_visible");
}
// opens modal div that contains form
// function openModal(modal) {
//   const modalBox = document.querySelector(".modal-box");
//   modalBox.classList.toggle("modal-box_visible");
//   fillForm(getName(), getOccupation());
// }

function openModal(modal) {
  modal.classList.toggle("modal-box_visible");
  fillForm(getName(), getOccupation());
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

  closeModal(editModal);
}

//creates card and add it to initialCards array so it can be rendered
function addNewCardForm(event) {
  event.preventDefault();

  const cardName = addCardModal.querySelector("#form__input-place").value;
  const hyperlink = addCardModal.querySelector("#form__input_url").value;

  const newCard = {
    name: cardName,
    link: hyperlink,
  };

  const cardElement = createCard(newCard);
  initialCards.push(newCard);
  gallery.prepend(cardElement);
  closeModal(addCardModal);
}
