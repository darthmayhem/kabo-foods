import { API_AUTHENTICATION_URL } from '../constants';

async function login(payload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
  const response = await fetch(API_AUTHENTICATION_URL, requestOptions);
  return response.json();
}

export default login;
