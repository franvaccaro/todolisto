/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/allReducers';

const initialState = {};
const middleware = [thunk];
// eslint-disable-next-line max-len
const enhancers = [applyMiddleware(...middleware), (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose];

const store = createStore(
  allReducers,
  initialState,
  compose(...enhancers),
);

export default store;
