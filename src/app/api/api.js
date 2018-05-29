import axios from 'axios';

const END_POINT_KEYS = {
  AUTH: 'AUTH',
  USER_PROFILE: 'USER_PROFILE',
};

const END_POINTS = {
  AUTH: 'user/auth',
  USER_PROFILE: 'users/{id}',
};

const URL_GETTER = {
  /**
   * Get api endPoint with params
   * @param {String} endPoint
   * @param {Object} params
   * @return {String}
   */
  get: (endPoint, params) => {
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
  }
};

export {
  END_POINTS,
  END_POINT_KEYS
};

export const parseAPIUrl = URL_GETTER.get;

const API_URL = 'https://api-stg.bliink.io';

export default axios.create({
  baseURL: `${API_URL}/v1/`,
  headers: {
    post: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
});
