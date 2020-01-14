import {
    take,
    call,
    put,
    fork,
} from 'redux-saga/effects';

import {
    SELECT_ROW,
} from './constants';
import {
    SET_SELECT_ROW,
} from '../../services/BE/books/constants';

export function* selectRow(payload) {
    yield put({ type: SET_SELECT_ROW, data: payload });
}

export function* selectRowFlow() {
    while (true) {
        const { payload } = yield take(SELECT_ROW);
        yield call(selectRow, payload);
    }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all 'active' and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* rootAppSaga() {
    yield fork(selectRowFlow);
}
