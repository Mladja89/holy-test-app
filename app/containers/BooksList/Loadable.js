/**
 * Asynchronously loads the component for BooksList
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
