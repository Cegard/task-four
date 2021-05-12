import { takeEvery, all } from 'redux-saga/effects';
import { loginFlow, logActions } from './loginSagas'


export function* rootSaga() {

  yield all([
    takeEvery(loginFlow),
    takeEvery(logActions),
  ]);
}