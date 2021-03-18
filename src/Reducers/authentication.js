import { SET_AUTHENTICATION, USER_CREDENTIALS } from '../constants';

const initialState = { credentials: USER_CREDENTIALS, authentication: {} };

/**
 * authentication reducer
 * @param {object} state - the state object
 * @param {object} action - the action object
 * @returns {{credentials: {password: string, email: string}, authentication: {}}|{credentials: {password: string, email: string}, authentication: ({}|Object|*)}}
 */
export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        authentication: action.authentication
      };
    default:
      return state;
  }
}
