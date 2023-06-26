export class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._authorization = headers.authorization;
  }

  getInitialCards() {
    return fetch(this._url, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error("Oops, there was an error", error));
  }

  // other methods for working with the API
}
