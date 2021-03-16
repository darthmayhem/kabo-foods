import { put, takeLatest } from 'redux-saga/effects';

import { GET_AUTHENTICATION_SAGA } from '../../constants';
import { setAuthentication } from '../../actions';
import login from '../../services/authentication.services';

const workerLoginSaga = function* (action) {
  const authentication = yield login(action.payload);
  yield put(setAuthentication(authentication));
};

const watchLoginSaga = function* () {
  yield takeLatest(GET_AUTHENTICATION_SAGA, workerLoginSaga);
};

export default watchLoginSaga;
