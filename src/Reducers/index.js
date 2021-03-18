import { combineReducers } from 'redux';

import userReducer from './user';
import authenticationReducer from './authentication';

/**
 * reducer combiner
 */
export default combineReducers({
  userReducer,
  authenticationReducer,
});
