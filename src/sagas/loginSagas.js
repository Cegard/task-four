import { sha256 } from 'js-sha256';
import { call, cancel, fork, put, take } from 'redux-saga/effects';


export function fakeAuthorize (payload) {

  return new Promise(async (resolve, reject) => {
    
    try {
      const result = sha256(payload.email + payload.password);
      resolve(result);
    } catch(error) {
      reject(error);
    }
  });
}


export function* authorize(payload) {
  const token = yield call(fakeAuthorize, payload.payload)
  yield put({type: 'LOGIN_SUCCESS'})
  yield put({type: 'SAVE_TOKEN', token});
}


export function* loginFlow() {
  
  while (true) {
    const payload = yield take('LOGIN_REQUEST')
    const task = yield fork(authorize, payload)
    const action = yield take(['LOGOUT'])
  
    if (action.type === 'LOGOUT') {
      yield cancel(task)
      yield put({type: 'DELETE_TOKEN'})
    }
  }
}


export function* logActions() {

  while (true) {
    const action = yield take('*')
    console.log(action.type);
  }
}
