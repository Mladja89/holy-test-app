/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SENDING_REQUEST = 'test/App/SENDING_REQUEST';
export const CHANGE_FORM     = 'test/App/CHANGE_FORM';
export const CLEAR_ERROR     = 'test/App/CLEAR_ERROR';
export const REQUEST_ERROR   = 'test/App/REQUEST_ERROR';

export const ON_SELECT_CHANGE = 'test/App/ON_SELECT_CHANGE';
export const LOAD_BOOKS       = 'test/App/LOAD_BOOKS';
