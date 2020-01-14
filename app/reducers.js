/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';

// BE specific reducers
import BooksReducer from './services/BE/books/reducer';

// FE specific reducers

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({

    books: BooksReducer,

    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}