import { API_USER_ACCOUNT_DATA_URL } from '../constants';

async function userAccountData(token) {
  const requestOptions = {
    method: 'GET',
    headers: { authorization: `bearer ${token}` },
  };

  const response = await fetch(API_USER_ACCOUNT_DATA_URL, requestOptions);
  return response.json();
}

export default userAccountData;
