import { combineReducers } from 'redux';

import userReducer from './user';
import authenticationReducer from './authentication';

export default combineReducers({
  userReducer,
  authenticationReducer,
});
