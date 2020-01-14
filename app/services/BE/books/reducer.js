/*
 * The reducer takes care of state changes in our app through actions
 */

import {
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  SET_SELECT_ROW,
} from './constants';

import {
  REQUEST_BOOKS
} from './constants';
import {
  ON_SELECT_CHANGE
} from '../../../containers/App/constants';

import produce from 'immer';
import { uniqBy } from 'lodash';

// The initial application state
const initialState = {
  error: '',
  currentlySending: false,
  uniqueNames: null,
  books: [],
  selectedWriter: null,
  selectedRow: null
};

// Takes care of changing the application state
const BooksReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SENDING_REQUEST:
      draft.currentlySending = action.sending;
      break;
    case REQUEST_ERROR:
      draft.error = action.error;
      break;
    case CLEAR_ERROR:
      draft.error = '';
      break;
    case SET_SELECT_ROW:
      if (draft.selectedRow && draft.selectedRow.name === action.data.name) {
        draft.selectedRow = null;
      } else {
        draft.selectedRow = action.data;
      }
      break;
    case ON_SELECT_CHANGE:
      draft.selectedWriter = action.payload;
      break;
    case REQUEST_BOOKS:
      draft.books = action.books;
      draft.uniqueNames = uniqBy(action.books, book => book.writer.name);
      break;
  }
});

export default BooksReducer;