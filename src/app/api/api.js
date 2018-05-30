import axios from 'axios';
import registerIntercepters from './intercepters';
import {END_POINT_KEYS, END_POINTS} from './endPoints';

/**
 * Get api endPoint with params
 * @param {String} endPoint
 * @param {Object} params
 * @return {String}
 */
export const parseAPIUrl = (endPoint, params) => {
  if (endPoint in END_POINTS) {
    let apiEndPoint = END_POINTS[endPoint];
    if (params && params.constructor === Object) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null) {
          const currParam = `{${key}}`;
          if (apiEndPoint.indexOf(currParam)) {
            apiEndPoint = apiEndPoint.replace(currParam, params[key])
          }
        }
      });
    }
    return apiEndPoint;
  }
  return null;
};

export {
  END_POINTS,
  END_POINT_KEYS
};

// const API_URL = 'https://api-stg.bliink.io';
const API_URL = 'http://192.168.2.86';

const rest = axios.create({
  baseURL: `${API_URL}/rest/v1/`,
  headers: {
    post: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
});

registerIntercepters(rest);

export default rest;