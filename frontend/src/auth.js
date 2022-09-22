export const BASE_URL = 'https://api.kotova.mesto.nomoredomains.sbs';

function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(
      new Error(`Ошибка ${res.status}: ${res.statusText}`)
    );
  };

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then((res) => checkResponse(res));
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then((res) => checkResponse(res));
}

export function signout() {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    credentials: "include",
  }).then((res) => checkResponse(res));
}
