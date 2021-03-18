import {
  GET_USER_SAGA, SET_USER, GET_AUTHENTICATION_SAGA, SET_AUTHENTICATION
} from '../constants';

/**
 * set user action
 * @param {object} accountData - the account data
 * @returns {{type: string, accountData}}
 */
export function setUser(accountData) {
  return {
    type: SET_USER,
    accountData
  };
}

/**
 * get user saga
 * @param {object} payload - the payload to get
 * @returns {{payload: {}, type: string}}
 */
export function getUserSaga(payload = {}) {
  return {
    type: GET_USER_SAGA,
    payload
  };
}

/**
 * set authentication action
 * @param {object} authentication - the authentication data
 * @returns {{type: string, authentication}}
 */
export function setAuthentication(authentication) {
  return {
    type: SET_AUTHENTICATION,
    authentication
  };
}

/**
 * get authentication saga
 * @param {object} payload - the payload to get
 * @returns {{payload: {}, type: string}}
 */
export function getAuthenticationSaga(payload = {}) {
  return {
    type: GET_AUTHENTICATION_SAGA,
    payload
  };
}
