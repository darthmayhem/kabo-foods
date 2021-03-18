import { put, takeLatest } from 'redux-saga/effects';

import { GET_AUTHENTICATION_SAGA } from '../../constants';
import { setAuthentication } from '../../actions';
import login from '../../services/authentication.services';

/**
 * login saga
 * @param {object} action - the action object
 * @returns {Generator<Promise<any>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string, authentication}>>, void, *>}
 */
const loginSaga = function* (action) {
  const authentication = yield login(action.payload);
  yield put(setAuthentication(authentication));
};

/**
 * login saga watcher
 * @returns {Generator<SimpleEffect<"FORK", ForkEffectDescriptor<never>>, void, *>}
 */
const watchLoginSaga = function* () {
  yield takeLatest(GET_AUTHENTICATION_SAGA, loginSaga);
};

export default watchLoginSaga;
