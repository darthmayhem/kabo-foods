import { SET_USER } from '../constants';

const initialState = { accountData: {} };

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
