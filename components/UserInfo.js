export class UserInfo {
  constructor({ userNameSelector, userOccupationSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userOccupation = document.querySelector(userOccupationSelector);
  }

  getUserInfo() {
    const userData = {
      userName: this._userName.textContent,
      userOccupation: this._userOccupation.textContent,
    };
    return userData;
  }

  setUserInfo(newUserName, newUserOccupation) {
    this._userName.textContent = newUserName;
    this._userOccupation.textContent = newUserOccupation;
  }
}

//!The UserInfo class is responsible for rendering information about the user on the page.
//!This class should:
//!Take an object with the selectors of two elements into the constructor: one containing the
//!user's name, and another containing the user's !
//!Store a public method named getUserInfo(), which returns an object with information
//!about the user. This method will be handy for cases when it's necessary to display the
//!user data in the open form.
//todo Store a public method named setUserInfo(), which takes new user data and adds it on the page.
//todo Create an instance of the UserInfo class in index.js. Use its method setUserInfo() to
//todo handle the form submission inside an instance of the PopupWithForm class.
