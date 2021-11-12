import {createStore, combineReducers} from '@reduxjs/toolkit';

import {all} from 'redux-saga/effects';

import {userReducer, userSaga} from './user';
import {postsReducer, postsSaga} from './posts';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware} from 'redux';

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  user: userReducer,
  posts: postsReducer,
};

const reducer = combineReducers(reducers);

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([userSaga(), postsSaga()]);
}

sagaMiddleware.run(rootSaga);
