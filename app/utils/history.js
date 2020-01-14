import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

// Little helper function to abstract going to different pages
export function forwardTo(location) {
  history.push(location);
};
