export class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._authorization = headers.authorization;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject("An error has occurred", res.status)
      )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  fetchProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject("An error has occurred", res.status)
      )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  updateProfile({ name, occupation }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: occupation,
      }),
    });
  }

  addNewCard({ cardTitle, cardLink }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cardTitle,
        link: cardLink,
      }),
    });
  }

  deleteCard(cardId) {
    console.log(cardId);
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    });
  }

  addLike(cardId) {
    console.log(cardId);
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        Promise.reject("something happened", response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  dislike(cardId) {
    console.log(cardId);
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        Promise.reject("something happened", response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateAvatar(imageLink) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: imageLink,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        Promise.reject("something happened", response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
