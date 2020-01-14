import axios from 'axios'

import { apiConstants } from '../constants/api';

import { responseTransformer } from '../utils/responseTransformer';
import { errorTransformer } from '../utils/errorTransformer';

/**
 * Create an Axios Client with defaults
 */
export const client = axios.create(apiConstants);

/**
 * JWT Interceptor Wrapper
 */
const jwtInterceptor = (requestConfig) => {
  return requestConfig;
};

const errorInterceptor = (error) => {
  return Promise.reject(error);
};

client.interceptors.request.use(jwtInterceptor);
client.interceptors.response.use(responseTransformer, errorInterceptor);

/**
 * Request Wrapper with default success/error actions
 */
export function request(options) {
  const onSuccess = function (response) {
    return response;
  };

  const onError = function (error) {
    if (error.response) {
      // Request is not 2xx
      console.error('Message:', errorTransformer(error.response));
    } else {
      // Something else happened with the request
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error);
  };

  return client(options)
    .then(onSuccess, onError)
}

/**
 * Request wrapper for Http request
 */
export function httpRequest(httpUrl, payload = {}) {
  return request({
    url: httpUrl,
    method: 'GET',
    data: {
      ...payload,
    },
  });
}
