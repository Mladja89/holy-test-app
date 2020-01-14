import {
    take,
    call,
    put,
    fork,
} from 'redux-saga/effects';

import {
    errorTransformer
} from '../../utils/errorTransformer';

import {
    SENDING_REQUEST,
    REQUEST_ERROR,
    LOAD_BOOKS,
    ON_SELECT_CHANGE,
} from './constants';
import {
    REQUEST_BOOKS
} from '../../services/BE/books/constants';

import booksApi from '../../services/BE/books';

export function* initializeBooks(payload) {
    yield put({ type: SENDING_REQUEST, sending: true });
    try {
        const books = yield call(booksApi.getList, payload);

        yield put({ type: REQUEST_BOOKS, books });

        return books;
    } catch (error) {
        yield put({ type: REQUEST_ERROR, error: error && errorTransformer(error) });
    } finally {
        yield put({ type: SENDING_REQUEST, sending: false });
    }
}

export function* onSelectChange(payload) {
    yield put({ type: ON_SELECT_CHANGE, payload });
}

export function* initializeBooksFlow() {
    while (true) {
        const request = yield take(LOAD_BOOKS);
        yield call(initializeBooks, request);
    }
}

export function* onSelectChangeFlow() {
    while (true) {
        const { params } = yield take(ON_SELECT_CHANGE);
        yield call(onSelectChange, params);
    }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all 'active' and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* rootAppSaga() {
    yield fork(initializeBooksFlow);
    yield fork(onSelectChangeFlow);
}
