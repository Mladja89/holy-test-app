import {config} from '../constants/config';

export const decodeJWT = (jwt) => {
  const [, body,] = jwt.split('.');
  return JSON.parse(atob(body));
};
