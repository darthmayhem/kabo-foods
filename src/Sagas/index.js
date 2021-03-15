import { all, fork } from 'redux-saga/effects';
import watchGetUsersSaga from './watchers/getUsers';

const sagas = function* () {
  yield all([
    fork(watchGetUsersSaga),
  ]);
};

export default sagas;
