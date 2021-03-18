const USER_CREDENTIALS = { email: 'dev2@email.com', password: 'password' };

const GET_AUTHENTICATION_SAGA = 'GET_AUTHENTICATION_SAGA';
const SET_AUTHENTICATION = 'SET_AUTHENTICATION';
const API_AUTHENTICATION_URL = 'https://api-staging.kabo.co/login';

const GET_USER_SAGA = 'GET_USER_SAGA';
const SET_USER = 'SET_USER';
const API_USER_ACCOUNT_DATA_URL = 'https://api-staging.kabo.co/api/v1/user/subscriptions';

export {
  USER_CREDENTIALS,
  GET_AUTHENTICATION_SAGA,
  SET_AUTHENTICATION,
  API_AUTHENTICATION_URL,
  GET_USER_SAGA,
  SET_USER,
  API_USER_ACCOUNT_DATA_URL
};
