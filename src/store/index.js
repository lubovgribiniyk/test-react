import { createStore, applyMiddleware } from 'redux';
import { moviesReducer } from './moviesReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default createStore(moviesReducer, applyMiddleware(thunk, logger));
