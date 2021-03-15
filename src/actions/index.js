import { GET_USERS_SAGA, SET_USERS } from '../constants';

export function getCombinedState(state) {
  return state;
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function getUsersSaga(payload = {}) {
  return {
    type: GET_USERS_SAGA,
    payload
  };
}
