import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../reducers/reducer';
import { rootSaga } from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()


export const ConfigureStore = () => {

  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
