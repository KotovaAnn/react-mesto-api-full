class Api {

  constructor(url) {
    this._url = url;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInfoUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }

  editAvatar(linkAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: linkAvatar.avatar
      })
    })
    .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      credentials: "include",
    })
    .then(this._checkResponse);
  }

  setUserInfo(inputValues) {
    const body = inputValues;
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: body.name,
        about: body.about
      })
    })
    .then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponse);
  }

  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
   if (isLiked === true) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
   } else {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
   }
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }

  offLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }
}

const api = new Api('https://api.kotova.mesto.nomoredomains.sbs');
export default api;
