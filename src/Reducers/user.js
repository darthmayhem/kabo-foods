import { SET_USER } from '../constants';

const initialState = { accountData: {} };

/**
 * user reducer
 * @param {object} state - the state object
 * @param {object} action - the action object
 * @returns {{accountData: {}}|{accountData: ({}|Object|*)}}
 */
export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        accountData: action.accountData
      };
    default:
      return state;
  }
}
