import { all, fork } from 'redux-saga/effects';
import watchLoginSaga from './watchers/authentication.saga';
import watchGetAccountDataSaga from './watchers/user.saga';

/**
 * the saga combinator
 * @returns {Generator<CombinatorEffect<"ALL", SimpleEffect<"FORK", ForkEffectDescriptor<void>>>, void, *>}
 */
const sagas = function* () {
  yield all([
    fork(watchLoginSaga),
    fork(watchGetAccountDataSaga),
  ]);
};

export default sagas;
