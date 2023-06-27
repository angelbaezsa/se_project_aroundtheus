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
        console.log(result);
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
}
