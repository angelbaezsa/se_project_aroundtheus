class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._authorization = headers.authorization;
  }

  getInitialCards() {
    fetch(this._url, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  // other methods for working with the API
}
