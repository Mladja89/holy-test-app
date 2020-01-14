import configureStore from './configureStore';
import history from './utils/history';

const initialState = {};
export const store = configureStore(initialState, history);
