import { SET_AUTHENTICATION } from '../constants';

const initialState = { credentials: { email: 'dev2@email.com', password: 'password' }, authentication: {} };

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
