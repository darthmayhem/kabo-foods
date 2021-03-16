import {
  GET_USER_SAGA, SET_USER, GET_AUTHENTICATION_SAGA, SET_AUTHENTICATION
} from '../constants';

export function setUser(accountData) {
  return {
    type: SET_USER,
    accountData
  };
}

export function getUserSaga(payload = {}) {
  return {
    type: GET_USER_SAGA,
    payload
  };
}

export function setAuthentication(authentication) {
  return {
    type: SET_AUTHENTICATION,
    authentication
  };
}

export function getAuthenticationSaga(payload = {}) {
  return {
    type: GET_AUTHENTICATION_SAGA,
    payload
  };
}
