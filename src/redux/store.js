import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {photos} from './reducers/photo';
import {sagaWatcher} from './saga/saga';

const saga = createSagaMiddleware();

export const store = createStore(
  photos,
  composeWithDevTools(applyMiddleware(ReduxThunk, saga)),
);

saga.run(sagaWatcher);
