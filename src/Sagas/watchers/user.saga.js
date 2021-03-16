import { put, takeLatest } from 'redux-saga/effects';

import { GET_USER_SAGA } from '../../constants';
import { setUser } from '../../actions';
import userAccountData from '../../services/user.service';
import login from '../../services/authentication.services';

const getAccountDataSaga = function* (action) {
  const authentication = yield login(action.payload);
  const accountData = yield userAccountData(authentication.token);
  yield put(setUser(accountData));
};

const watchGetAccountDataSaga = function* () {
  yield takeLatest(GET_USER_SAGA, getAccountDataSaga);
};

export default watchGetAccountDataSaga;
