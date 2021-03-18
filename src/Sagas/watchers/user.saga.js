import { put, select, takeLatest } from 'redux-saga/effects';

import { GET_USER_SAGA } from '../../constants';
import { setUser } from '../../actions';
import userAccountData from '../../services/user.service';
import login from '../../services/authentication.services';

/**
 * get account data saga
 * @param {object} action - the action object
 * @returns {Generator<Promise<any>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string, accountData}>>, void, *>}
 */
const getAccountDataSaga = function* (action) {
  // get token is not already authenticated
  let authentication = yield select(state => state.authenticationReducer);
  if (!authentication.token) {
    authentication = yield login(action.payload);
  }

  const accountData = yield userAccountData(authentication.token);
  yield put(setUser(accountData));
};

/**
 * the get account data watcher
 * @returns {Generator<SimpleEffect<"FORK", ForkEffectDescriptor<never>>, void, *>}
 */
const watchGetAccountDataSaga = function* () {
  yield takeLatest(GET_USER_SAGA, getAccountDataSaga);
};

export default watchGetAccountDataSaga;
