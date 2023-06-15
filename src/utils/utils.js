export function fillProfileForm(userInfo) {
  document.querySelector(".form__input_name").value = userInfo.userName;
  document.querySelector(".form__input_description").value =
    userInfo.userOccupation;
}

// //! the utils.js folder and filename are named in lower case since the first correction,
// //?not sure why appears otherwise
