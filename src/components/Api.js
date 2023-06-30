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

  deleteCard() {}
}
