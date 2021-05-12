import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../reducers/reducer';
import { loginFlow, logActions } from '../sagas/loginSagas'

const sagaMiddleware = createSagaMiddleware();


export const ConfigureStore = () => {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(loginFlow);
  sagaMiddleware.run(logActions);

  return store;
};
