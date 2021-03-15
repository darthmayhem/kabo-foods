import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_USERS_SAGA } from '../../constants';
import { setUsers } from '../../actions';
import getUsers from '../../lib/api';

const workerGetUsersSaga = function* () {
  const users = yield call(getUsers);
  yield put(setUsers(users));
};

const watchGetUsersSaga = function* () {
  yield takeLatest(GET_USERS_SAGA, workerGetUsersSaga);
};

export default watchGetUsersSaga;
