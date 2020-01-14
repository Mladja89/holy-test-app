/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
    CHANGE_FORM,
    SENDING_REQUEST,
    REQUEST_ERROR,
    CLEAR_ERROR,
    LOAD_BOOKS,
    ON_SELECT_CHANGE,
} from './constants';

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
export function changeForm(newFormState) {
    return { type: CHANGE_FORM, newFormState };
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest(sending) {
    return { type: SENDING_REQUEST, sending };
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError(error) {
    return { type: REQUEST_ERROR, error };
}

/**
 * Sets the `error` state as empty
 */
export function clearError() {
    return { type: CLEAR_ERROR };
}

/**
 * Load books
 */
export function loadBooks() {
    return { type: LOAD_BOOKS };
}

/**
 * Load books
 */
export function onSelectChange(params) {
    return { type: ON_SELECT_CHANGE, params };
}
