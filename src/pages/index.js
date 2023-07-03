import { initialCards } from "../utils/constants.js";
import "../pages/index.css";
import { Card } from "../components/Card.js"; //imports Class Card from Components folder.
import { Section } from "../components/Section.js";
import { FormValidation } from "../components/FormValidation.js"; //Import FormValidation Class from components folder.
import { ModalWithForm } from "../components/ModalWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { ModalWithPhoto } from "../components/ModalWithPhoto.js";
import { fillProfileForm } from "../utils/utils.js";
import { Api } from "../components/Api.js";
//imports config
import { config } from "../utils/constants.js";
import { ModalWithDialog } from "../components/ModalWithDialog.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "8213539a-e47c-4d36-92f9-050521f3ca6f",
  },
});

let cardList;
Promise.all([api.getInitialCards(), api.fetchProfile()])
  .then(([cardsData, userData]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    cardList = new Section(
      { items: cardsData, renderer: createCard },
      ".gallery"
    );
    cardList.renderItems();
  })
  .catch((error) => {
    console.error("Oops, something happened", error);
  });

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

const areYouSureModal = new ModalWithForm("modal-box_type_delete-card");
const areYouSureModalValidation = new FormValidation(
  document.querySelector(".form__delete-card"),
  config
);

areYouSureModalValidation.enableValidation();

function createCard(cardObject) {
  const card = new Card(
    cardObject,
    "#card",
    previewCard,
    {
      handleDelete: () => {
        areYouSureModal.open();
        areYouSureModal.changeEventListener(() => {
          console.log(cardObject, cardObject._id);
          api.deleteCard(cardObject._id).then((res) => {
            card.deleteCard();
            areYouSureModal.close();
            areYouSureModal.eliminateEventListener();
          });
        });
      },
    },
    {
      handleLikeCallback: () => {
        console.log("handle like call back triggered");
        api.addLike(cardObject._id).then((response) => {
          console.log(response.likes.length);
          card.refreshLikesCount(response.likes.length);
        });
      },
      handleDislikeCallback: () => {
        console.log("handle dislike call back triggered");
        api.dislike(cardObject._id).then((response) => {
          console.log(response.likes.length);
          card.refreshLikesCount(response.likes.length);
        });
      },
    }
  );
  return card.getView();
}
// ------------------------------------------------------------------->

const editProfileModal = new ModalWithForm("modal-box_edit-profile", (evt) => {
  updateProfile(editProfileModal.getInputValues());
});
const addNewCardModal = new ModalWithForm("modal-box_add-card", () => {
  addNewCard(addNewCardModal.getInputValues());
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
  console.log(profileObject);
  api.updateProfile({
    name: newName,
    occupation: newOccupation,
  });
  userInfo.setUserInfo(newName, newOccupation);
  editProfileFormValidator.disableSubmitButton();
  editProfileModal.close();
}

export function addNewCard(cardData) {
  const newCard = {
    name: cardData["input-place"],
    link: cardData["input-url"],
  };
  api
    .addNewCard({
      cardTitle: cardData["input-place"],
      cardLink: cardData["input-url"],
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject("Something has occured", res.status);
    })
    .then((cardResponse) => {
      console.log(cardResponse);
      cardList.addItem(createCard(cardResponse));
    })
    .catch((error) => {
      console.error(error);
    });

  addNewCardModal.close();
}

const modalWithPhoto = new ModalWithPhoto("modal-box__photo-viewer");

export function previewCard(link, name) {
  modalWithPhoto.open(link, name);
}
