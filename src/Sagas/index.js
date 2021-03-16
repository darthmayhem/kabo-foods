import { all, fork } from 'redux-saga/effects';
import watchLoginSaga from './watchers/authentication.saga';
import watchGetAccountDataSaga from './watchers/user.saga';

const sagas = function* () {
  yield all([
    fork(watchLoginSaga),
    fork(watchGetAccountDataSaga),
  ]);
};

export default sagas;
