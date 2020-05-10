import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {photos} from './reducers/photo';

export const store = createStore(
  photos,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
